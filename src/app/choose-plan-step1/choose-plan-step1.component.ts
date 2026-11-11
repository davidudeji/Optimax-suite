import { Component } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-choose-plan-step1',
  templateUrl: './choose-plan-step1.component.html',
  styleUrls: ['./choose-plan-step1.component.css']
})
export class ChoosePlanStep1Component {
  constructor(private planService: PlanService) { }

  onSubmit(): void {
    // Add form validation and submission logic
    this.planService.nextStep();
  }
}
