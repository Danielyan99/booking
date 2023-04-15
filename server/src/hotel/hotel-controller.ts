import { Controller, Get } from '@nestjs/common';
import { HotelService } from './hotel-service';

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Get('/all')
  async getHotels() {
    return this.hotelService.getAll();
  }
}
