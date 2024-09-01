import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-defer2',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './defer2.component.html',
  styleUrl: './defer2.component.css',
})
export class Defer2Component {}
