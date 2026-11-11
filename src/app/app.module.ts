import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContactmapComponent } from './contactmap/contactmap.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { RouterModule } from '@angular/router';

// Navigation
import { NavigationComponent } from './navigation/navigation.component';

// Home page + sections
import { HomeComponent } from './pages/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { FeaturesComponent } from './pages/home/features/features.component';
import { PartnersComponent } from './pages/home/partners/partners.component';
import { CounterComponent } from './pages/home/counter/counter.component';
import { ComparisonComponent } from './pages/home/comparison/comparison.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';
import { HomeCTAComponent } from './pages/home/home-cta/home-cta.component';

// Onboarding
import { OnboardingComponent } from './pages/onboard/onboarding/onboarding.component';
import { SuperAdminStepComponent } from './pages/onboard/onboarding/steps/super-admin-step/super-admin-step.component';
import { DomainStepComponent } from './pages/onboard/onboarding/steps/domain-step/domain-step.component';
import { BusinessInfoStepComponent } from './pages/onboard/onboarding/steps/business-info-step/business-info-step.component';

// Existing module pages
import { PricingComponent } from './pages/pricing/pricing.component';
import { PospageComponent } from './pages/pospage/pospage.component';
import { HrpageComponent } from './pages/hrpage/hrpage.component';

// New module pages
import { AccountingpageComponent } from './pages/accountingpage/accountingpage.component';
import { ProcurementpageComponent } from './pages/procurementpage/procurementpage.component';
import { ExpensepageComponent } from './pages/expensepage/expensepage.component';
import { CrmpageComponent } from './pages/crmpage/crmpage.component';

// General pages
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogLoginComponent } from './pages/blog-login/blog-login.component';
import { BlogCreateComponent } from './pages/blog-create/blog-create.component';
import { BlogAdminComponent } from './pages/blog-admin/blog-admin.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { IndustrypageComponent } from './pages/industrypage/industrypage.component';

// Forum
import { ForumAuthModalComponent } from './components/forum-auth-modal/forum-auth-modal.component';
import { ForumHomeComponent } from './pages/forum-home/forum-home.component';
import { ForumCategoryComponent } from './pages/forum-category/forum-category.component';
import { ForumThreadComponent } from './pages/forum-thread/forum-thread.component';
import { ForumNewThreadComponent } from './pages/forum-new-thread/forum-new-thread.component';
import { ForumVerifyComponent } from './pages/forum-verify/forum-verify.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    // Home
    HomeComponent,
    HeroComponent,
    FeaturesComponent,
    PartnersComponent,
    CounterComponent,
    ComparisonComponent,
    TestimonialsComponent,
    HomeCTAComponent,

    // Onboarding
    OnboardingComponent,
    SuperAdminStepComponent,
    DomainStepComponent,
    BusinessInfoStepComponent,

    // Module pages
    PricingComponent,
    PospageComponent,
    HrpageComponent,
    AccountingpageComponent,
    ProcurementpageComponent,
    ExpensepageComponent,
    CrmpageComponent,

    // General pages
    BlogpageComponent,
    BlogPostComponent,
    BlogLoginComponent,
    BlogCreateComponent,
    BlogAdminComponent,
    ContactpageComponent,
    IndustrypageComponent,

    // Forum
    ForumAuthModalComponent,
    ForumHomeComponent,
    ForumCategoryComponent,
    ForumThreadComponent,
    ForumNewThreadComponent,
    ForumVerifyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    SubscribeComponent,
    ContactmapComponent,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaV3Module,
    CommonModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6LdoOAosAAAAAJ0HNQztpmK1jIS1NLdZtxjY2V8x',
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
