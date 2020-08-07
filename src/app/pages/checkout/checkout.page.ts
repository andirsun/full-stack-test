import { Component, OnInit, Input } from '@angular/core';
import { IRoom, IAditional } from 'src/app/tab1/domain/responses.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  @Input() room: IRoom;
  @Input() aditionals: IAditional;
  
  constructor() { }

  ngOnInit() {
    console.log(this.room, this.aditionals);
  }

}
