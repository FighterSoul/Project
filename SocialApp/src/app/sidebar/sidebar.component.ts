import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ChatboxComponent, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  friends=[
    {name:'John'}  //sample data
  ]

}


