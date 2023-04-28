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

  createHotel(hotelDto) {
    return this.hotelModel.create({
      ...hotelDto,
    });
  }

  updateHotel(hotelId, hotelData) {
    return this.hotelModel.findByIdAndUpdate(
      hotelId,
      {
        $set: hotelData,
      },
      { new: true },
    );
  }

  deleteHotel(hotelId) {
    return this.hotelModel.findByIdAndDelete(hotelId);
    // also here can be functionality to delete all refferenced rooms that hotel contains
  }

  getHotel(hotelId) {
    return this.hotelModel.findById(hotelId);
  }

  getAll() {
    return this.hotelModel.find();
  }
}
