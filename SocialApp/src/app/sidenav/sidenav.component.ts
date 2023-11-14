import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  navigateToGroups() {
    this.router.navigate(['/groups']);
  }
  navigateToFriends() {
    this.router.navigate(['/friends']);
  }
  


}
