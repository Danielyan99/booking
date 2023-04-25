import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Room {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
