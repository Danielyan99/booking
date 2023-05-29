import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Room {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  hotelData: Map<any, any>;

  @Prop()
  reservedDates: Array<{ startDate: string; endDate: string }>;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
