import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
// Interfaces
import { IRoom, IAditional } from 'src/app/tab1/domain/responses.interface';
// Pages
import { CheckoutPage } from '../checkout/checkout.page';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
})
export class RoomDetailPage implements OnInit {

  room : IRoom;
  roomToBuy : any;
  aditionals = new Set();

  constructor(
    private router : Router,
    private location : Location,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.room = this.location.getState()["room"];
    this.roomToBuy = this.room;
  }

  addAditionalService(aditional : IAditional, e){
    // If the propertie is checked
    if(e.detail.checked){
      this.roomToBuy.price+= aditional.price
      this.aditionals.add(aditional);
    //If is unchecked
    }else{
      this.roomToBuy.price-= aditional.price
      this.aditionals.delete(aditional);
    }
  }

  async addToCheckout(){
    const modal = await this.modalController.create({
      component: CheckoutPage,
      componentProps :{
        room : this.roomToBuy,
        aditionals : this.aditionals
      }
    });
    return await modal.present();
  }

}
