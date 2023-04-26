import { Module } from '@nestjs/common';
import { UserModule } from './user/user-module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelModule } from './hotel/hotel-module';
import { RoomModule } from './room/room-module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    HotelModule,
    RoomModule,
  ],
})
export class AppModule {}
