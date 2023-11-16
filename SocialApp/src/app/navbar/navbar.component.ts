import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from '@app/feed/feed.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '@app/sidenav/sidenav.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SidenavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  navigateToFeed() {
    this.router.navigate(['/feed']);

  }
}