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
  
}