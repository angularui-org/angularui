import { Directive, inject, input, ViewChild } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { DialogService } from './dialog.service';

@Directive({
  selector: '[uiDialogTrigger]',
  standalone: true,
  host: {
    '(click)': 'openDialog()'
  }
})
export class DialogTriggerDirective {
  dialogService = inject(DialogService);

  dialog = input();

  constructor() { }


  openDialog() {
    console.log('trigger clicked');
    this.dialogService.open(this.dialog())
  }

}
