import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';
import {product} from './product.interface';
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
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

  findAll() {
    return `This action returns all travel`;
  }

  findOne(id: number) : trips{
const Voyage = this.trips.find((V) => V.id === id);
if (!Voyage) {
throw new NotFoundException(`voyage ${id} introuvable`);
}
return Voyage;
}
  

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
