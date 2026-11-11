import { Component } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-choose-plan-step2',
  templateUrl: './choose-plan-step2.component.html',
  styleUrl: './choose-plan-step2.component.css'
})
export class ChoosePlanStep2Component {
  constructor(private planService: PlanService) { }

  onSubmit(): void {
    // Add form validation and submission logic
    this.planService.nextStep();
  }
}
