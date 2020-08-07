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

  rooms: unknown;
  constructor(
    private router : Router,
    private location : Location,
  ) {}

  ngOnInit() {
    this.rooms = this.location.getState()["rooms"];

    console.log(this.rooms);
  }

  roomDetails(room : IRoom){
    console.log(room);
  }

}
