import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Room } from '../room/room-model';

@Schema({ timestamps: true })
export class Hotel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  region: string;

  @Prop({ required: true })
  star: number;

  @Prop()
  cancellationPolicy: Array<string>;

  @Prop()
  facilities: Array<string>;

  @Prop()
  meals: Array<string>;

  @Prop()
  funThings: Array<string>;

  @Prop()
  images: Array<any>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Room.name }] })
  rooms: Room[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
