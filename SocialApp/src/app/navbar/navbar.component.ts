import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
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
export class NavbarComponent implements OnInit {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {}

  navigateToFeed() {
    this.router.navigate(['/feed']);
  }
  ngOnInit(): void {
    // Check if the application is running in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      const animatedIcon = document.getElementById('myAnimatedIcon');
      if (animatedIcon) {
        animatedIcon.addEventListener('click', this.toggleIcon.bind(this));
      }
    }
  }

  toggleIcon(): void {
    const animatedIcon = document.getElementById('myAnimatedIcon');
    if (animatedIcon) {
      animatedIcon.classList.toggle('open');
      animatedIcon.classList.toggle('half-opacity');
    }
  }
}