import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: any[] = [];

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(type: string) {
    this.modals = this.modals.filter(x => x.type !== type);
  }

  open(type: string) {
    const modal = this.modals.find(x => x.type === type);
    modal.open();
  }

  close(type: string) {
    const modal = this.modals.find(x => x.type === type);
    modal.close();
  }
}
