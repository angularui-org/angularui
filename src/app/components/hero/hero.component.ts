import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@angularui/components';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonDirective, RouterLink, FooterComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {

}
