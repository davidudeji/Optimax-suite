import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, filter, take } from 'rxjs';
import { BlogPost, BlogService } from '../services/blog.service';

declare const YT: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  featuredPosts: BlogPost[] = [];
  readonly youtubeVideoId = 'VTntzBr227k';
  readonly youtubeChannelUrl = 'https://www.youtube.com/@OptimaXSuites';
  readonly previewLengthSeconds = 15;

  isPreviewStarted = false;
  isPreviewEnded = false;

  private player: any = null;
  private previewIntervalId: number | null = null;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    combineLatest([this.blogService.posts$, this.blogService.ready$])
      .pipe(
        filter(([, ready]) => ready),
        take(1)
      )
      .subscribe(([posts]) => {
        this.featuredPosts = posts
          .filter((post) => !this.blogService.isInitialPost(post.id))
          .slice(0, 3);
      });
  }

  ngOnDestroy(): void {
    this.clearPreviewInterval();
    if (this.player && typeof this.player.destroy === 'function') {
      this.player.destroy();
    }
  }

  get youtubePosterUrl(): string {
    return `https://i.ytimg.com/vi/${this.youtubeVideoId}/hqdefault.jpg`;
  }

  onPlayPreview(): void {
    if (this.isPreviewEnded) {
      return;
    }

    this.isPreviewStarted = true;

    if ((window as any).YT && (window as any).YT.Player) {
      this.initializePlayer();
      return;
    }

    const scriptId = 'youtube-iframe-api';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.head.appendChild(script);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      this.initializePlayer();
    };

    window.setTimeout(() => {
      if (!(window as any).YT || !(window as any).YT.Player) {
        this.isPreviewStarted = false;
        this.isPreviewEnded = true;
      }
    }, 2000);
  }

  private initializePlayer(): void {
    if (this.player || !document.getElementById('optimax-showcase-player')) {
      return;
    }

    this.player = new YT.Player('optimax-showcase-player', {
      width: '100%',
      height: '100%',
      videoId: this.youtubeVideoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        end: this.previewLengthSeconds,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
      },
      events: {
        onReady: (event: any) => {
          event.target.playVideo();
          this.ensurePreviewLimit();
        },
        onStateChange: (event: any) => {
          if (event.data === (window as any).YT.PlayerState.PLAYING) {
            this.ensurePreviewLimit();
          }

          if (event.data === (window as any).YT.PlayerState.ENDED) {
            this.showFullVideoPrompt();
          }
        },
      },
    });
  }

  private ensurePreviewLimit(): void {
    this.clearPreviewInterval();
    this.previewIntervalId = window.setInterval(() => {
      if (!this.player || typeof this.player.getCurrentTime !== 'function') {
        return;
      }

      const currentTime = this.player.getCurrentTime();
      if (currentTime >= this.previewLengthSeconds) {
        this.player.seekTo(this.previewLengthSeconds, true);
        this.player.pauseVideo();
        this.showFullVideoPrompt();
      }
    }, 250);
  }

  private showFullVideoPrompt(): void {
    this.clearPreviewInterval();
    this.isPreviewEnded = true;

    if (this.player && typeof this.player.stopVideo === 'function') {
      this.player.stopVideo();
    }
  }

  private clearPreviewInterval(): void {
    if (this.previewIntervalId !== null) {
      window.clearInterval(this.previewIntervalId);
      this.previewIntervalId = null;
    }
  }
}
