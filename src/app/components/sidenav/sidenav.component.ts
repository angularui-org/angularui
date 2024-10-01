import { Component } from '@angular/core';
import { SIDENAV_ITEMS } from '../../constants/ui.constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent {

  sidenavItems = SIDENAV_ITEMS;

}
