import { Component, OnInit, Input } from '@angular/core';
import { IRoom, IAditional } from 'src/app/tab1/domain/responses.interface';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
// Services
import { ReservationService } from './application/reservation.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  /* External properties */
  @Input() room: IRoom;
  @Input() aditionals : [];
  
  constructor(
    public modalController: ModalController,
    private reservationServices : ReservationService,
    private router : Router,
  ) { }

  ngOnInit() {}

  /*
    THis method allows to close the modal
  */
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  /*
    This method is to make a reservation
  */
  reservation(){
    let aditionalServices = [];
    // Transforma a set into array to send the request
    this.aditionals.forEach(element => {
      aditionalServices.push(element);
    });
    // Make the reservation using the reservation service
    this.reservationServices.makeReservation(this.room,aditionalServices)
      .subscribe(response =>{
        console.log(response);
        // Close the checkou modal
        this.dismiss();
        // Navigate to main Page
        this.router.navigateByUrl('/')
      
      },error =>{
        console.log(error);
      })
  }


}
