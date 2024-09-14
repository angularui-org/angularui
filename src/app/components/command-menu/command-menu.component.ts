import { Component } from '@angular/core';
import { ButtonDirective } from '@angularui/components';

@Component({
  selector: 'app-command-menu',
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: './command-menu.component.html'
})
export class CommandMenuComponent {

}
