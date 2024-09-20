import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../assets/data.json';

// Створюємо інтерфейс для типізації об'єкта
interface Item {
  title: string;
  genre: string;
  text: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponent implements OnInit {
  items: Item[] = [];  // Типізуємо масив об'єктів

  ngOnInit(): void {
    this.items = data.items;  // Присвоюємо імпортовані дані з JSON
  }
  readReview(item: Item): void {
    alert(`Рецензія на ${item.title}`);
  }
}