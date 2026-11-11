import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private currentStep = 1;

  constructor(private router: Router) { }

  nextStep(): void {
    this.currentStep++;
    this.navigateToCurrentStep();
  }

  goToStep(step: number): void {
    this.currentStep = step;
    this.navigateToCurrentStep();
  }

  getCurrentStep(): number {
    return this.currentStep;
  }

  private navigateToCurrentStep(): void {
    this.router.navigate([`/choose-plan-step${this.currentStep}`]);
  }
}
