import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Friend {
  name: string;
  // Add other friend-related properties as needed
}
@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})

export class ChatboxComponent {
  showCreateForm: boolean = true;
  @Input() friends: Friend[] = [];
  isOpen: boolean = false;
  isMinimized: boolean = true;
  currentFriend: Friend | null = null;

  toggleChatbox(friend: Friend) {
    this.isOpen = !this.isOpen;
    this.isMinimized = true;
    this.currentFriend = friend;
  }

  minimizeChatbox() {
    this.isMinimized = !this.isMinimized;
  }

  closeChatbox() {
      this.showCreateForm = !this.showCreateForm;

  }
}