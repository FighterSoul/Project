import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './feed/post/post.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { NgModule} from '@angular/core'
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FriendsComponent } from './friends/friends.component';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FeedComponent, 
  PostComponent, SidenavComponent, SidebarComponent, ProfileComponent, LoginComponent,
  RouterModule, ChatboxComponent,FriendsComponent, ChatwindowComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialApp';
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    // Perform your login logic here (authentication, etc.)
    // For now, we'll set isLoggedIn to true as a placeholder
    this.isLoggedIn = true;

    // Navigate to the main page after login
    this.router.navigate(['/feed']); // Replace with your actual route path
  }

  logout() {
    // Perform your logout logic here
    this.isLoggedIn = false;
     // Navigate to the login page after logout
     this.router.navigate(['/login']); // Replace with your actual route path
  }}
