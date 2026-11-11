import { Injectable } from '@angular/core';
import { BlogPost } from './blog.service';

/**
 * The public-facing site origin. Used to build the canonical URL for each
 * blog post that gets passed to Twitter/LinkedIn/Facebook so their crawlers
 * can fetch the Open Graph tags and build a preview card.
 *
 * IMPORTANT: change this if the production domain differs.
 */
const SITE_ORIGIN = 'https://optimaxsuites.com';

@Injectable({ providedIn: 'root' })
export class SocialShareService {

  /** Canonical, public URL for a given post (what gets shared, not localhost/dev). */
  postUrl(post: BlogPost): string {
    return `${SITE_ORIGIN}/blog/${post.slug}`;
  }

  /**
   * Converts the post's stored HTML content into plain text, while
   * preserving paragraph/heading/list breaks as line breaks. This is the
   * closest thing to "keeping formatting" that a plain-text share field
   * (Twitter/Facebook/Instagram caption) can support — none of these
   * platforms render bold/headers/bullets in share text, only line breaks.
   */
  private htmlToPlainText(html: string): string {
    const container = document.createElement('div');
    container.innerHTML = html;

    const blockTags = new Set(['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'BLOCKQUOTE', 'TR']);
    let out = '';

    const walk = (node: ChildNode) => {
      if (node.nodeType === Node.TEXT_NODE) {
        out += node.textContent;
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;

      const el = node as HTMLElement;
      if (el.tagName === 'BR') {
        out += '\n';
        return;
      }
      if (el.tagName === 'LI') out += '- ';

      el.childNodes.forEach(walk);

      if (blockTags.has(el.tagName)) out += '\n\n';
    };

    container.childNodes.forEach(walk);

    // Collapse 3+ newlines down to a max of 2 (one blank line between paragraphs)
    return out.replace(/\n{3,}/g, '\n\n').trim();
  }

  /** Full plain-text caption: title on its own line, then the full article body. */
  fullCaption(post: BlogPost): string {
    const body = this.htmlToPlainText(post.content);
    return `${post.title}\n\n${body}`;
  }

  /**
   * Opens Twitter/X's web intent with the title and link pre-filled.
   * NOTE: Twitter enforces a hard ~280 character limit on the composed
   * post — a full article body cannot fit, and forcing it in would just
   * produce a "too long" error the user can't get past. So this
   * intentionally stays title + link only; there is no way to fit full
   * article text into a tweet.
   */
  shareToTwitter(post: BlogPost): void {
    const text = post.title;
    const url = this.postUrl(post);
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    this.openPopup(intent);
  }

  /**
   * Opens LinkedIn's post composer pre-filled with real text, using the
   * undocumented `shareActive` endpoint (linkedin.com/feed/?shareActive=true&text=...).
   *
   * Unlike the official share-offsite endpoint (which ignores any text you
   * pass and only scrapes OG tags from a URL), this one pre-fills LinkedIn's
   * actual "create a post" composer with real text on the user's feed —
   * so the full caption shows up regardless of your site's OG tags.
   *
   * Two caveats worth knowing:
   *  1) This endpoint is NOT officially documented by LinkedIn. It's a
   *     known, currently-working trick, but LinkedIn could change or kill
   *     it without notice since it's not a supported public API.
   *  2) If the included text contains the post URL, LinkedIn's composer
   *     will likely still try to auto-generate a link-preview card by
   *     fetching that URL — and THAT preview card still depends on the
   *     site's OG tags (same crawler limitation as before). Only the
   *     plain text itself is guaranteed to show correctly, independent of
   *     OG tags.
   */
  shareToLinkedIn(post: BlogPost): void {
    const url = this.postUrl(post);
    let text = this.fullCaption(post);
    const MAX_TEXT = 1500; // keep the resulting URL within safe length limits
    if (text.length > MAX_TEXT) {
      text = text.slice(0, MAX_TEXT).trim() + '…';
    }
    text += `\n\n${url}`;

    const intent = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`;
    this.openPopup(intent);
  }

  /**
   * Opens Facebook's share dialog with the FULL article text pre-filled
   * into the "say something about this" box via the `quote` param — this
   * is the one platform of the three that actually supports pre-filling
   * real text (not just a scraped preview).
   *
   * The quote text is capped at ~1500 characters purely to keep the
   * resulting URL within safe cross-browser URL length limits (~2000
   * chars total) — long articles get truncated with an ellipsis and the
   * link itself still points to the full post either way.
   */
  shareToFacebook(post: BlogPost): void {
    const url = this.postUrl(post);
    let quote = this.fullCaption(post);
    const MAX_QUOTE = 1500;
    if (quote.length > MAX_QUOTE) {
      quote = quote.slice(0, MAX_QUOTE).trim() + '…';
    }
    const intent = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}`;
    this.openPopup(intent);
  }

  /**
   * Instagram has no web share-intent of any kind — there is no URL you can
   * open that pre-fills a post, story, or caption, and no way to push text
   * into the Instagram app from a website beyond what's below.
   *
   * Current behavior (image handling intentionally left out for now):
   *   1) Try the Web Share API (mobile browsers) with just text/url — if
   *      the OS share sheet is available, the user can still pick
   *      Instagram from it, though Instagram may or may not actually
   *      insert that text into a caption field once opened (that part is
   *      controlled by Instagram's app, not by this code).
   *   2) Fall back to: copy the full title+article text to the clipboard
   *      so the user can paste it into Instagram themselves.
   *
   * Full silent auto-posting (image + caption, no manual steps) to
   * Instagram is possible ONLY through the server-side Instagram Graph
   * API, and only for Business/Creator accounts that have gone through
   * Meta App Review — see the setup instructions doc for that path.
   */
  async shareToInstagram(post: BlogPost): Promise<'shared' | 'copied'> {
    const caption = this.fullCaption(post);

    if ((navigator as any).canShare) {
      try {
        const shareData: any = { text: caption, url: this.postUrl(post) };
        if ((navigator as any).canShare(shareData)) {
          await (navigator as any).share(shareData);
          return 'shared';
        }
      } catch {
        // fall through to clipboard fallback (also covers user cancelling — treated as no-op)
      }
    }

    try {
      await navigator.clipboard.writeText(caption);
    } catch {
      // clipboard access can fail (permissions/older browsers) — nothing
      // further to fall back to here since image handling is removed.
    }

    return 'copied';
  }

  private openPopup(url: string): void {
    window.open(url, '_blank', 'width=560,height=520,noopener,noreferrer');
  }
}
