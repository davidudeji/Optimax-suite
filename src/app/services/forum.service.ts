import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumAuthService } from './forum-auth.service';

export interface ForumCategory {
  id: number;
  name: string;
  description: string;
  slug: string;
  icon: string;
  color: string;
  threadCount: number;
}

export interface ForumThread {
  id: number;
  title: string;
  content: string;
  slug: string;
  status: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  pinned: boolean;
  createdAt: string;
  categoryId: number;
  categoryName: string;
  categoryColor: string;
  categorySlug: string;
  authorName: string;
  authorAvatarUrl?: string;
  authorId: number;
  liked: boolean;
}

export interface ForumComment {
  id: number;
  threadId: number;
  content: string;
  authorName: string;
  authorAvatarUrl?: string;
  authorId: number;
  isSolution: boolean;
  parentCommentId?: number;
  replies?: ForumComment[];
  createdAt: string;
}

export interface ForumThreadDetail {
  thread: ForumThread;
  comments: ForumComment[];
}

export interface BlogEngagement {
  likeCount: number;
  commentCount: number;
  liked: boolean;
}

export interface BlogComment {
  id: number;
  content: string;
  authorName: string;
  authorAvatarUrl?: string;
  authorId: number;
  parentCommentId?: number;
  replies?: BlogComment[];
  createdAt: string;
}

const API = 'https://be.optimaxsuites.com/x/api/v2/ai';

@Injectable({ providedIn: 'root' })
export class ForumService {
  constructor(private http: HttpClient, private forumAuthService: ForumAuthService) {}

  getCategories(): Observable<ForumCategory[]> {
    return this.http.get<ForumCategory[]>(`${API}/community/categories`, {
      headers: this.forumAuthService.publicHeaders(),
    });
  }

  getThreads(
    categoryId?: number,
    page = 0,
    size = 20
  ): Observable<{ content: ForumThread[]; totalPages: number; totalElements: number }> {
    let url = `${API}/community/threads?page=${page}&size=${size}`;
    if (categoryId !== undefined && categoryId !== null) {
      url += `&categoryId=${categoryId}`;
    }
    const headers = this.forumAuthService.isLoggedIn()
      ? this.forumAuthService.forumHeaders()
      : this.forumAuthService.publicHeaders();
    return this.http.get<{ content: ForumThread[]; totalPages: number; totalElements: number }>(url, { headers });
  }

  getThread(slug: string): Observable<ForumThreadDetail> {
    const headers = this.forumAuthService.isLoggedIn()
      ? this.forumAuthService.forumHeaders()
      : this.forumAuthService.publicHeaders();
    return this.http.get<ForumThreadDetail>(`${API}/community/threads/${slug}`, { headers });
  }

  createThread(title: string, content: string, categoryId: number): Observable<ForumThread> {
    return this.http.post<ForumThread>(
      `${API}/community/threads`,
      { title, content, categoryId },
      { headers: this.forumAuthService.forumHeaders() }
    );
  }

  addThreadComment(threadId: number, content: string, parentCommentId?: number): Observable<ForumComment> {
    return this.http.post<ForumComment>(
      `${API}/community/threads/${threadId}/comments`,
      { content, parentCommentId: parentCommentId ?? null, captchaToken: '' },
      { headers: this.forumAuthService.forumHeaders() }
    );
  }

  toggleThreadLike(threadId: number): Observable<{ liked: boolean; likeCount: number }> {
    return this.http.post<{ liked: boolean; likeCount: number }>(
      `${API}/community/threads/${threadId}/like`,
      {},
      { headers: this.forumAuthService.forumHeaders() }
    );
  }

  markSolution(threadId: number, commentId: number): Observable<void> {
    return this.http.put<void>(
      `${API}/community/threads/${threadId}/comments/${commentId}/solution`,
      {},
      { headers: this.forumAuthService.forumHeaders() }
    );
  }

  deleteThread(threadId: number): Observable<void> {
    return this.http.delete<void>(`${API}/community/threads/${threadId}`, {
      headers: this.forumAuthService.forumHeaders(),
    });
  }

  deleteComment(threadId: number, commentId: number): Observable<void> {
    return this.http.delete<void>(
      `${API}/community/threads/${threadId}/comments/${commentId}`,
      { headers: this.forumAuthService.forumHeaders() }
    );
  }

  getBlogEngagement(postId: string): Observable<BlogEngagement> {
    const headers = this.forumAuthService.isLoggedIn()
      ? this.forumAuthService.forumHeaders()
      : this.forumAuthService.publicHeaders();
    return this.http.get<BlogEngagement>(`${API}/blog/posts/${postId}/engagement`, { headers });
  }

  toggleBlogLike(postId: string): Observable<{ liked: boolean; likeCount: number }> {
    return this.http.post<{ liked: boolean; likeCount: number }>(
      `${API}/blog/posts/${postId}/like`,
      {},
      { headers: this.forumAuthService.forumHeaders() }
    );
  }

  getBlogComments(postId: string): Observable<BlogComment[]> {
    const headers = this.forumAuthService.isLoggedIn()
      ? this.forumAuthService.forumHeaders()
      : this.forumAuthService.publicHeaders();
    return this.http.get<BlogComment[]>(`${API}/blog/posts/${postId}/comments`, { headers });
  }

  addBlogComment(postId: string, content: string, parentCommentId?: number): Observable<BlogComment> {
    return this.http.post<BlogComment>(
      `${API}/blog/posts/${postId}/comments`,
      { content, parentCommentId: parentCommentId ?? null, captchaToken: '' },
      { headers: this.forumAuthService.forumHeaders() }
    );
  }

  deleteBlogComment(postId: string, commentId: number): Observable<void> {
    return this.http.delete<void>(
      `${API}/blog/posts/${postId}/comments/${commentId}`,
      { headers: this.forumAuthService.forumHeaders() }
    );
  }
}
