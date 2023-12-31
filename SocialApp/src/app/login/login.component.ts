import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '@app/register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  username: string = '';
  password: string = '';
  clickedd:boolean=true;

  submitForm() {
    // Additional logic if needed

    // Emit the onSubmit event
    this.onSubmit.emit();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
  clicked(){
    this.clickedd=false;
  }
}
