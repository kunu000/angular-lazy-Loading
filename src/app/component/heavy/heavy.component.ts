import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy',
  standalone: true,
  imports: [],
  templateUrl: './heavy.component.html',
  styleUrl: './heavy.component.css',
})
export class HeavyComponent {
  item: any = null;

  constructor(private http: HttpClient) {
    console.log('running heavy component')
  }
  ngOnInit(): void {
    // setTimeout(() => {
      this.fetchData();
    // }, 700);
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (data: any) => {
        this.item = data;
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      },
    });
  }
}
