import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Comment {
  user: string;
  text: string;
  likeCount: number;
  dislikeCount: number; // Add dislikeCount property
  loveCount: number;
  userLiked: boolean;
  userDisliked: boolean; // Add userDisliked property
  userLoved: boolean;
  responding?: boolean;
  responseText?: string;
  responses: { user: string; text: string }[];
}
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  likeCount: number = 0;
  loveCount: number = 0;
  userLiked: boolean = false;
  userLoved: boolean = false;
  commentFormVisible: boolean = false; // Add a variable to track the visibility of the comment form
  commentText: string = ''; // Variable to store the current comment
  comments: Comment[] = []; // Ensure there's only one declaration with the correct type  
  
  // Add a variable for the user's name
  userName: string = 'UserName';

   // Variable to store the posting time
   postTime: Date = new Date();

  toggleLikePost() {
    this.userLiked = !this.userLiked;
    this.likeCount += this.userLiked ? 1 : -1;
  }

  toggleLovePost() {
    this.userLoved = !this.userLoved;
    this.loveCount += this.userLoved ? 1 : -1;
  }

  toggleCommentForm() {
    this.commentFormVisible = !this.commentFormVisible;
  }


  addComment() {
    if (this.commentText.trim() !== '') {
      this.comments.push({
        user: this.userName,
        text: this.commentText,
        likeCount: 0,
        dislikeCount: 0, // Add dislikeCount property
        loveCount: 0,
        userLiked: false,
        userDisliked: false, // Add userDisliked property
        userLoved: false,
        responding: false,
        responses: []
      });

      // Clear the commentText variable for the next comment
      this.commentText = '';
    }
  }
  toggleLikeComment(comment: any) {
    comment.userLiked = !comment.userLiked;
    comment.likeCount += comment.userLiked ? 1 : -1;
  }

   // Toggle disliking a comment
   toggleDislikeComment(comment: Comment) {
    if (comment.userDisliked) {
      comment.dislikeCount--;
    } else {
      comment.dislikeCount++;
    }
    comment.userDisliked = !comment.userDisliked;
  }

  toggleLoveComment(comment: any) {
    comment.userLoved = !comment.userLoved;
    comment.loveCount += comment.userLoved ? 1 : -1;
  }

  toggleResponding(comment: Comment) {
    comment.responding = !comment.responding;

    // Reset responseText when toggling out of responding
    if (!comment.responding) {
      comment.responseText = '';
    }
  }
  // Add a response to a comment
  addResponse(comment: Comment) {
    // Assuming you have a responseText property in the Comment interface
    const responseText = comment.responseText ?? ''; // Use an empty string if comment.responseText is undefined
  
    if (responseText.trim() !== '') {
      comment.responses.push({
        user: this.userName,
        text: responseText
      });
  
      // Clear the responseText variable for the next response
      comment.responseText = '';
    }
  }

  // Function to format the posting time
  formatPostTime(): string {
    // You can customize the formatting based on your preference
    return this.postTime.toLocaleString();
  }
  
}