import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  friends = [
    { name: 'John', bio: 'Lorem ipsum dolor sit amet' ,img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' },
    { name: 'Jane', bio: 'Consectetur adipiscing elit', img: 'https://img.freepik.com/free-photo/young-beautiful-woman-with-long-hair_1150-16098.jpg' },
    { name: 'Bob', bio: 'Sed do eiusmod tempor incididunt', img: 'https://img.freepik.com/free-photo/portrait-handsome-man-with-beard_23-2148221552.jpg' },
    { name: 'Bobse', bio: 'Sed do eiusmod tempor incididunt', img: 'https://img.freepik.com/free-photo/portrait-handsome-man-with-beard_23-2148221552.jpg' },
    { name: 'Bobsr', bio: 'Sed do eiusmod tempor incididunt', img: 'https://img.freepik.com/free-photo/portrait-handsome-man-with-beard_23-2148221552.jpg' },
    { name: 'Bobst', bio: 'Sed do eiusmod tempor incididunt', img: 'https://img.freepik.com/free-photo/portrait-handsome-man-with-beard_23-2148221552.jpg' },
    { name: 'Bobst', bio: 'Sed do eiusmod tempor incididunt', img: 'https://img.freepik.com/free-photo/portrait-handsome-man-with-beard_23-2148221552.jpg' },
    { name: 'Bobst', bio: 'Sed do eiusmod tempor incididunt', img: 'https://img.freepik.com/free-photo/portrait-handsome-man-with-beard_23-2148221552.jpg' }
  ];
}

