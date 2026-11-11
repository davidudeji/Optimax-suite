import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home.component';
import { OnboardingComponent } from './pages/onboard/onboarding/onboarding.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PospageComponent } from './pages/pospage/pospage.component';
import { HrpageComponent } from './pages/hrpage/hrpage.component';
import { AccountingpageComponent } from './pages/accountingpage/accountingpage.component';
import { ProcurementpageComponent } from './pages/procurementpage/procurementpage.component';
import { ExpensepageComponent } from './pages/expensepage/expensepage.component';
import { CrmpageComponent } from './pages/crmpage/crmpage.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogLoginComponent } from './pages/blog-login/blog-login.component';
import { BlogCreateComponent } from './pages/blog-create/blog-create.component';
import { BlogAdminComponent } from './pages/blog-admin/blog-admin.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { IndustrypageComponent } from './pages/industrypage/industrypage.component';
import { BlogAuthGuard } from './guards/blog-auth.guard';
import { ForumHomeComponent } from './pages/forum-home/forum-home.component';
import { ForumCategoryComponent } from './pages/forum-category/forum-category.component';
import { ForumThreadComponent } from './pages/forum-thread/forum-thread.component';
import { ForumNewThreadComponent } from './pages/forum-new-thread/forum-new-thread.component';
import { ForumVerifyComponent } from './pages/forum-verify/forum-verify.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-started', component: OnboardingComponent },
  { path: 'pricing', component: PricingComponent },

  // Module pages
  { path: 'pos', component: PospageComponent },
  { path: 'hr', component: HrpageComponent },
  { path: 'accounting', component: AccountingpageComponent },
  { path: 'procurement', component: ProcurementpageComponent },
  { path: 'expense', component: ExpensepageComponent },
  { path: 'crm', component: CrmpageComponent },

  // General pages
  { path: 'blog', component: BlogpageComponent },
  { path: 'blog/admin/login', component: BlogLoginComponent },
  { path: 'blog/admin', component: BlogAdminComponent, canActivate: [BlogAuthGuard] },
  { path: 'blog/admin/new', component: BlogCreateComponent, canActivate: [BlogAuthGuard] },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'industries/:slug', component: IndustrypageComponent },

  // Forum / Community
  { path: 'community', component: ForumHomeComponent },
  { path: 'community/verify', component: ForumVerifyComponent },
  { path: 'community/new', component: ForumNewThreadComponent },
  { path: 'community/category/:slug', component: ForumCategoryComponent },
  { path: 'community/thread/:slug', component: ForumThreadComponent },

  // Catch-all redirect
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
