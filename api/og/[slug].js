/**
 * api/og/[slug].js — Vercel Serverless Function
 *
 * This file lives in the `api/` directory, which Vercel automatically
 * turns into a serverless endpoint for ANY framework (not just Next.js) —
 * this one becomes reachable at /api/og/:slug.
 *
 * It is only ever hit when vercel.json's rewrite rule detects a known
 * crawler bot User-Agent requesting /blog/:slug (see vercel.json in this
 * same folder) — real human visitors never touch this function; they get
 * your normal static Angular app exactly as before, untouched.
 *
 * WHAT IT DOES
 * ------------
 * Fetches the requested post from your real blog API and responds with a
 * small, fast HTML page containing that specific post's og:title /
 * og:description / og:image / og:url — so Facebook/LinkedIn/Twitter/etc.
 * generate a correct preview card instead of a generic or blank one.
 */

const SITE_ORIGIN = 'https://optimaxsuites.com';
const API_BASE = 'https://be.optimaxsuites.com/x/api/v2/ai';
const TENANT_ID = 'optimax'; // same value used in blog.service.ts's TENANT constant

// Simple in-memory cache (persists for the lifetime of a warm serverless
// instance — not guaranteed across cold starts, but cuts down repeat API
// calls during a burst of crawler hits).
let cache = { posts: null, expiresAt: 0 };
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

async function fetchAllPosts() {
  if (cache.posts && cache.expiresAt > Date.now()) return cache.posts;

  const res = await fetch(`${API_BASE}/blog/posts`, {
    headers: { 'X-Tenant-ID': TENANT_ID },
  });
  if (!res.ok) throw new Error(`Blog API returned ${res.status}`);
  const posts = await res.json();
  cache = { posts, expiresAt: Date.now() + CACHE_TTL_MS };
  return posts;
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toPlainExcerpt(html = '', maxLen = 200) {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > maxLen ? text.slice(0, maxLen).trim() + '…' : text;
}

function renderBotHtml(post) {
  const title = escapeHtml(post.title);
  const description = escapeHtml(post.excerpt || toPlainExcerpt(post.content));
  const image = escapeHtml(post.image);
  const url = `${SITE_ORIGIN}/blog/${post.slug}`;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OptimaX Suites" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${url}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <link rel="canonical" href="${url}" />
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>
  <a href="${url}">Read the full article</a>
</body>
</html>`;
}

module.exports = async (req, res) => {
  const { slug } = req.query;

  try {
    const posts = await fetchAllPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      res.status(404).send('Post not found');
      return;
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=300'); // 5 min edge cache
    res.status(200).send(renderBotHtml(post));
  } catch (err) {
    console.error('OG render failed:', err.message);
    // If the API call fails, redirect to the normal post page rather than
    // showing an error to the crawler — worst case it just sees no preview.
    res.redirect(302, `${SITE_ORIGIN}/blog/${slug}`);
  }
};
