import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Hotel } from '../hotel/hotel-model';

@Schema({ timestamps: true })
export class Room {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
