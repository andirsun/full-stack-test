import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { CheckoutPage } from '../checkout/checkout.page';
import { IRoom } from 'src/app/tab1/domain/responses.interface';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  // Properties
  rooms: IRoom[] = [];
  
  constructor(
    private router : Router,
    private location : Location,
  ) {}

  ngOnInit() {
    this.rooms = this.location.getState()["rooms"];
  }

  roomDetails(room : IRoom){
    // Navigate to room detail page
    this.router.navigateByUrl('/room-detail',{state :{room : room}})
  }
  

}
