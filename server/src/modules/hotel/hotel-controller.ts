import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HotelService } from './hotel-service';

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post('/create')
  createHotel(@Body() hotelDto) {
    return this.hotelService.createHotel(hotelDto);
  }

  @Put(':id')
  updateHotel(@Param() params: { id: string }, @Body() hotelData) {
    return this.hotelService.updateHotel(params.id, hotelData);
  }

  @Delete(':id')
  deleteHotel(@Param() params: { id: string }) {
    return this.hotelService.deleteHotel(params.id);
  }

  @Get('/get/:id')
  getHotel(@Param() params: { id: string }) {
    return this.hotelService.getHotel(params.id);
  }

  @Get('/all')
  getAll() {
    return this.hotelService.getAll();
  }
}
