import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './pages/home/hero/hero.component';
import { FeaturesComponent } from './pages/home/features/features.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet, HeroComponent, FeaturesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  title = 'landingpageOpti';
}
