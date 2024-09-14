import { Component } from '@angular/core';
import { ButtonDirective } from '@angularui/components';
import { LucideAngularModule } from 'lucide-angular';
import { CommandMenuComponent } from '../command-menu/command-menu.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommandMenuComponent, LucideAngularModule, ButtonDirective],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
