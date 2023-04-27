import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './room-model';
import mongoose from 'mongoose';
import { Hotel } from '../hotel/hotel-model';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: mongoose.Model<Room>, @InjectModel(Hotel.name) private hotelModel: mongoose.Model<Hotel>) {}

  async createRoom(roomDto) {
    const createdRoom = await this.roomModel.create({ ...roomDto });
    const updatedHotel = await this.hotelModel.findByIdAndUpdate(roomDto.hotelId, { $addToSet: { rooms: createdRoom._id } });
    return updatedHotel;
  }

  async getRoomsByHotel(hotelId) {
    const hotel = await this.hotelModel.findById(hotelId);
    const rooms = hotel.populate('rooms');
    console.log(rooms);
    return hotel;
  }
}
