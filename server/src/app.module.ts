import { Module } from '@nestjs/common';
import { UserModule } from './user/user-module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelModule } from './hotel/hotel-module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    HotelModule,
  ],
})
export class AppModule {}
