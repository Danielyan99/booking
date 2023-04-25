import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './room-model';
import mongoose from 'mongoose';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name)
    private hotelModel: mongoose.Model<Room>,
  ) {}

  async getAll() {
    return [{ name: 'room1' }];
  }
}
