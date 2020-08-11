// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { ReservationService } from './application/reservation.service';
// Services

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  reservations : [any] ;
  constructor(
    private reservationService : ReservationService
  ) {
  }
  ngOnInit() {
    this.fetchInfo();

  }
  fetchInfo(){
    this.reservationService.getReservations()
      .subscribe(response =>{
        this.reservations= response.content.reservations;
        console.log(this.reservations);
      },error =>{
        console.log(error);
      });
  };

  doRefresh(event : any) {
    setTimeout(() => {
      this.fetchInfo();
      event.target.complete();
    }, 2000);
  }

  

}
