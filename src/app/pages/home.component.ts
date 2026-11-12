import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, take } from 'rxjs';
import { BlogPost, BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  currentYear = new Date().getFullYear();
  featuredPosts: BlogPost[] = [];

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
}
