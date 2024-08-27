import { Component } from '@angular/core';
import { HeavyComponent } from "../heavy/heavy.component";

@Component({
  selector: 'app-defer1',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './defer1.component.html',
  styleUrl: './defer1.component.css',
})
export class Defer1Component {
  
}
