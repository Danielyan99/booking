import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './room-model';
import mongoose from 'mongoose';
import { Hotel } from '../hotel/hotel-model';
import { User } from '../user/user-model';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name) private roomModel: mongoose.Model<Room>,
    @InjectModel(Hotel.name) private hotelModel: mongoose.Model<Hotel>,
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
  ) {}

  async createRoom(roomDto) {
    const createdRoom = await this.roomModel.create({ ...roomDto });
    await this.hotelModel.findByIdAndUpdate(roomDto.hotelId, { $addToSet: { rooms: createdRoom._id } });
    return createdRoom;
  }

  updateRoom(roomId, roomData) {
    return this.roomModel.findByIdAndUpdate(
      roomId,
      {
        $set: roomData,
      },
      { new: true },
    );
  }

  deleteRoom(roomId) {
    return this.roomModel.findByIdAndDelete(roomId);
  }

  getRoom(roomId) {
    return this.roomModel.findById(roomId);
  }

  getAll() {
    return this.roomModel.find();
  }

  async getRoomsFromHotel(hotelId) {
    const hotel = await this.hotelModel.findById(hotelId).populate('rooms');
    return hotel.rooms;
  }

  async reserveRoom(id, data) {
    const room = await this.roomModel.findById(id);
    await this.userModel.updateOne(
      { _id: data.userId },
      {
        $push: {
          reservedRooms: { dates: data.date, roomId: id, hotelData: data.hotelData, totalPrice: data.totalPrice },
        },
      },
    );
    await this.userModel.findByIdAndUpdate(data.userId, { $addToSet: { rooms: id } });

    room.reservedDates.push(data.date);
    return room.save();
  }

  async getReservedRooms() {
    const rooms = await this.roomModel.find();
    return rooms.filter((room) => room.reservedDates.length);
  }
}
