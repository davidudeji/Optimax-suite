import { Component } from '@angular/core';

@Component({
  selector: 'app-small-screen-navbar',
  templateUrl: './small-screen-navbar.component.html',
  styleUrls: ['./small-screen-navbar.component.css']
})
export class SmallScreenNavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
