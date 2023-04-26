import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel } from './hotel-model';
import mongoose from 'mongoose';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(Hotel.name)
    private hotelModel: mongoose.Model<Hotel>,
  ) {}

  async createHotel(hotelDto) {
    const createdHotel = await this.hotelModel.create({
      ...hotelDto,
    });

    return { ...createdHotel };
  }

  async getAll() {
    return [{ name: 'hotel1' }];
  }
}
