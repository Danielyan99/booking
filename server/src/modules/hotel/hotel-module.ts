import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from './hotel-model';
import { HotelController } from './hotel-controller';
import { HotelService } from './hotel-service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }])],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
