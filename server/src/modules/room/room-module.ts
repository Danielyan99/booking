import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './room-model';
import { RoomController } from './room-controller';
import { RoomService } from './room-service';
import { HotelSchema } from '../hotel/hotel-model';
import { UserSchema } from '../user/user-model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Room', schema: RoomSchema },
      { name: 'Hotel', schema: HotelSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
