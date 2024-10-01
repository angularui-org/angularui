import { Directive } from '@angular/core';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';

@Directive({
  selector: '[uiDialogContent]',
  standalone: true,
  hostDirectives: [CdkPortal]
})
export class DialogContentDirective {

  constructor() { }

}
