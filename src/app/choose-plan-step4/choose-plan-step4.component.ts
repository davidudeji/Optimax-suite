// choose-plan-step1.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-choose-plan-step4',
  templateUrl: './choose-plan-step4.component.html',
  styleUrls: ['./choose-plan-step4.component.css']
})
export class ChoosePlanStep4Component {
  planForm: FormGroup;

  constructor(private fb: FormBuilder, private planService: PlanService) {
    this.planForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.planForm.valid) {
      // Process form submission logic here
      this.planService.nextStep();
    }
  }
}
