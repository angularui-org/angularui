import { computed, inject, Injectable } from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  overlay = inject(Overlay)

  constructor() { }

  open(portal: any) {
    const overlayRef = this.overlay.create();
    // overlayRef.attach(portal);
  }
}
