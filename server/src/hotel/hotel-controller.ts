import { Body, Controller, Get, Post } from '@nestjs/common';
import { HotelService } from './hotel-service';

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post('/create')
  async createHotel(@Body() hotelDto) {
    return this.hotelService.createHotel(hotelDto);
  }

  @Get('/all')
  async getHotels() {
    return this.hotelService.getAll();
  }
}
