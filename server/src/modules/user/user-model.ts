import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { RolesEnum } from '../../helpers/roles/roles.enum';
import { Room } from '../room/room-model';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  role: RolesEnum;

  @Prop()
  reservedRooms: Array<{ dates: Array<{ startDate: string; endDate: string }>; roomId: string }>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Room.name }] })
  rooms: Room[];

  @Prop()
  dates: Map<any, any>;
}

export const UserSchema = SchemaFactory.createForClass(User);
