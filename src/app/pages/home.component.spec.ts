import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { BlogPost, BlogService } from '../services/blog.service';

const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'placeholder',
    title: 'Placeholder post',
    excerpt: 'Not for homepage promotion',
    content: '',
    category: 'ERP',
    categoryColor: '#000000',
    author: 'Optimax',
    authorInitial: 'O',
    authorColor: '#000000',
    date: 'Jan 1, 2025',
    readTime: '1 min read',
    image: '/assets/placeholder.jpg',
    imageAlt: 'Placeholder',
  },
  {
    id: 'published',
    slug: 'published-post',
    title: 'Published post',
    excerpt: 'A real published article',
    content: '',
    category: 'ERP',
    categoryColor: '#000000',
    author: 'Optimax',
    authorInitial: 'O',
    authorColor: '#000000',
    date: 'Jan 2, 2025',
    readTime: '2 min read',
    image: '/assets/published.jpg',
    imageAlt: 'Published article',
  },
];

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [CommonModule, RouterTestingModule],
      providers: [{
        provide: BlogService,
        useValue: {
          posts$: of(posts),
          ready$: of(true),
          isInitialPost: (id: string) => id === '1',
        },
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('only features published posts, not seeded placeholder articles', () => {
    expect(component.featuredPosts.map((post) => post.slug)).toEqual(['published-post']);
  });
});
