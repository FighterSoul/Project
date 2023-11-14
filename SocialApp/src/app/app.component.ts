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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FeedComponent, 
  PostComponent, SidenavComponent, SidebarComponent, ProfileComponent, LoginComponent,
  RouterModule, ChatboxComponent,FriendsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialApp';
}
