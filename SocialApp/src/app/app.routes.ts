import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './groups/groups.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FriendsComponent } from './friends/friends.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'groups', component: GroupComponent },
  { path: 'friends', component: FriendsComponent},
  { path: 'chatbox', component: ChatboxComponent},
  // Add other routes as needed
];
