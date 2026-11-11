import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.css',
})
export class TestimonialCarouselComponent {
  testimonials = [
    {
      text: 'The user-friendly interface and excellent support have made our transition to OptimaX seamless.',
      author: 'Magdalin Smith',
      position: 'CFO of Tech Innovators',
    },
    {
      text: `Adopting OptimaX has been a game-changer for our team. 
          The intuitive interface and powerful features have
          significantly improved our efficiency and productivity.`,
      author: 'Sarah M.',
      position: 'Operations Manager at Global Enterprises',
    },
    {
      text: 'We have seen a significant improvement in our operational efficiency since implementing OptimaX.',
      author: 'David L.',
      position: 'IT Director at NextGen Solutions',
    },
  ];

  currentSlide = 0;

  changeSlide(direction: number) {
    this.currentSlide += direction;

    if (this.currentSlide >= this.testimonials.length) {
      this.currentSlide = 0;
    }

    if (this.currentSlide < 0) {
      this.currentSlide = this.testimonials.length - 1;
    }
  }
}
