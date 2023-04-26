import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Hotel } from '../hotel/hotel-model';

@Schema({ timestamps: true })
export class Room {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' })
  hotel: Hotel;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
