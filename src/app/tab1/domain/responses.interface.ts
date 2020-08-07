export interface GetHotelsResponse {
  content : {
    hotels : [IHotel]
  }
}

export interface IHotel {
  _id : string,
  address : string,
  city : string,
  urlImg : string,
  description : string,
  rooms : [IRoom],

}
export interface IRoom {
  _id : string,
  number : string,
  description : string,
  price : number
  type : "SINGLE" | "DOUBLE" | "SUITE";
  urlImg : string,
  services : [IService],
  aditionals : [IAditional]
}

export interface IService {
  _id : string,
  description : string
}

export interface IAditional {
  _id : string,
  price : number,
  description : string,
  include : false,

}