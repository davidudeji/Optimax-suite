import { CanDeactivateFn } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';

export const onboardingGuard: CanDeactivateFn<OnboardingComponent> = (cmp) => {
  if (cmp.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Are you sure you want to leave onboarding?');
  }
  return true;
};