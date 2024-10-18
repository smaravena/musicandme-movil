import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  @ViewChild(IonModal)
  modal!: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

}
