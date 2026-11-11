import { Component } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plan-navigation',
  templateUrl: './plan-navigation.component.html',
  styleUrls: ['./plan-navigation.component.css'],
})
export class PlanNavigationComponent {
  steps = [1, 2, 3, 4]; // Adjust this array based on the number of steps

  constructor(public planService: PlanService) {}
}
