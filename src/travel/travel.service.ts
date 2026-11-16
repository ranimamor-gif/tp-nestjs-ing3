import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';
import {Travel} from './travel.interface.ts';
@Injectable()
export class TravelService {
  private trips=[
    {
      id:1,
      name:'To China',
      price:9000
    },
    {
      id:2,
      name:'To Marocco',
      price:4000
    },
  ];
  private lastId=3;
  
  findAll(id:number,name:string,price:number) {
     return this.trips.filter((trip)=>
     {trip.id && trip.name && trip.price}
    );
  }

  findOne(id: number) : trips{
const Voyage = this.trips.find((V) => V.id === id);
if (!Voyage) {
return `voyage ${id} introuvable`;
}
return Voyage;
}
  

  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }
}
