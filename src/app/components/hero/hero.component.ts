import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@angularui/components';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonDirective, RouterLink],
  templateUrl: './hero.component.html'
})
export class HeroComponent {

}
