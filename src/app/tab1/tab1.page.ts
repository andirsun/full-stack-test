import { Component } from '@angular/core';
import { HotelsService } from './application/hotels.service';
import { IHotel } from "./domain/responses.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  hotels : IHotel[] = []
  constructor(
    private hotelsService : HotelsService,
    private router: Router
  ) {
    this.fetchInfo();
  }

  fetchInfo(){
    this.hotelsService.getHotels()
      .subscribe(response =>{
        this.hotels= response.content.hotels;
      },error =>{
        console.log(error);
      });
  }

  showRooms(rooms){
    console.log(rooms);
    this.router.navigateByUrl('/rooms',{state :{rooms : rooms}})
  }
  

}
