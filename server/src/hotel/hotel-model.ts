import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Hotel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  star: number;

  @Prop({ required: true, default: 0 })
  score: number;

  @Prop({ required: true })
  region: string;

  @Prop({ required: true })
  freeCancellation: boolean;

  @Prop({ required: true })
  bookWithoutCreditCard: boolean;

  @Prop({ required: true })
  noPayment: boolean;

  @Prop()
  swimmingPool: boolean;

  @Prop()
  spaCenter: boolean;

  @Prop()
  petsAllowed: boolean;

  @Prop()
  freeWiFi: boolean;

  @Prop()
  fitnessCenter: boolean;

  @Prop()
  parking: boolean;

  @Prop()
  restaurant: boolean;

  @Prop()
  beach: boolean;

  @Prop()
  massage: boolean;

  @Prop()
  billiards: boolean;

  @Prop()
  diving: boolean;

  @Prop()
  allInclusive: boolean;

  @Prop()
  breakfast: boolean;

  @Prop()
  selfCatering: boolean;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
