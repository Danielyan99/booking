import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user-module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelModule } from './modules/hotel/hotel-module';
import { RoomModule } from './modules/room/room-module';

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
