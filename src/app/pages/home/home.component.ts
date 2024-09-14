import { Component } from '@angular/core';
import { AlertDescriptionDirective, AlertDirective, AlertTitleDirective, ButtonDirective } from '@angularui/components';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AlertDescriptionDirective, AlertDirective, AlertTitleDirective, ButtonDirective],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
