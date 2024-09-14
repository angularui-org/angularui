import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertDescriptionDirective, AlertDirective, AlertTitleDirective, ButtonDirective } from '@angularui/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonDirective, AlertDirective, AlertTitleDirective, AlertDescriptionDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularui';
}