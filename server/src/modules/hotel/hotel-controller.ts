import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { HotelService } from './hotel-service';
import { Roles } from '../../helpers/roles/roles.decorator';
import { RolesEnum } from '../../helpers/roles/roles.enum';
import { RolesGuard } from '../../guards/roles.guard';
import { JwtAuthGuard } from '../../guards/jwt-auth-guard';

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post('/create')
  @Roles(RolesEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createHotel(@Body() hotelDto) {
    return this.hotelService.createHotel(hotelDto);
  }

  @Put(':id')
  @Roles(RolesEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateHotel(@Param() params: { id: string }, @Body() hotelData) {
    return this.hotelService.updateHotel(params.id, hotelData);
  }

  @Delete(':id')
  @Roles(RolesEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
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

  @Get('/sections')
  getHotelSections() {
    return this.hotelService.getHotelSections();
  }
}
