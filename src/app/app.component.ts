import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FfHeaderComponent} from "./ff-header/ff-header.component";
import {FfFooterComponent} from "./ff-footer/ff-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FfHeaderComponent, FfFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frankfrazetta';
}
