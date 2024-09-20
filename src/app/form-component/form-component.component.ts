import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})

export class FormComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  items: { firstName: string, lastName: string, email: string }[] = [];

  addItem() {
    if (this.firstName && this.lastName && this.email) {
      this.items.push({ firstName: this.firstName, lastName: this.lastName, email: this.email });
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    }
  }
}
