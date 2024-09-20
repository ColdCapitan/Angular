import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav-component/nav-component.component';
import { ListComponent } from './list-component/list-component.component';
import { FormComponent } from './form-component/form-component.component';
import { FooterComponent } from './footer-component/footer-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavComponent, ListComponent, FormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
