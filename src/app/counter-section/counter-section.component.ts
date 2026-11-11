import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-section',
  templateUrl: './counter-section.component.html',
  styleUrls: ['./counter-section.component.css']
})
export class CounterSectionComponent implements OnInit {
  counters = [
    { label: 'Visitors', value: 0, target: 1000 },
    { label: 'Clients', value: 0, target: 200 },
    { label: 'Subscribers', value: 0, target: 2000 }
  ];

  ngOnInit() {
    this.startCounters();
  }

  startCounters() {
    this.counters.forEach(counter => {
      this.animateCounter(counter);
    });
  }

  animateCounter(counter: { label?: string; value: any; target: any; }) {
    const duration = 50000; // Duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / counter.target));
    let current = 0;

    const step = () => {
      current += 1;
      counter.value = current;
      if (current < counter.target) {
        setTimeout(step, stepTime);
      } else {
        counter.value = counter.target; // Ensure the final value is set correctly
      }
    };

    step();
  }

  getIconClass(label: string): string {
    switch (label) {
      case 'Visitors':
        return 'fas fa-users';         // Icon for Visitors
      case 'Clients':
        return 'fas fa-briefcase';     // Icon for Clients
      case 'Subscribers':
        return 'fas fa-envelope';      // Icon for Subscribers
      default:
        return 'fas fa-info-circle';   // Default Icon
    }
  }
}
