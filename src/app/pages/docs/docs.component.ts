import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent],
  templateUrl: './docs.component.html'
})
export class DocsComponent {

}
