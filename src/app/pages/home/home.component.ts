import { Component, inject } from '@angular/core';
import { AlertDescriptionDirective, AlertDirective, AlertTitleDirective, ButtonDirective, DialogContentDirective, DialogService, DialogTriggerDirective } from '@angularui/components';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, FooterComponent, AlertDescriptionDirective, AlertDirective, AlertTitleDirective, ButtonDirective, DialogTriggerDirective, DialogContentDirective, CdkAccordionModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
