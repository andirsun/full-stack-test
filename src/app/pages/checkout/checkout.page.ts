import { Component, OnInit, Input } from '@angular/core';
import { IRoom, IAditional } from 'src/app/tab1/domain/responses.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  @Input() room: IRoom;
  @Input() aditionals: IAditional;
  
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.room, this.aditionals);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
