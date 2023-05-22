import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { RoomService } from './room-service';
import { Roles } from '../../helpers/roles/roles.decorator';
import { RolesEnum } from '../../helpers/roles/roles.enum';
import { RolesGuard } from '../../guards/roles.guard';
import { JwtAuthGuard } from '../../guards/jwt-auth-guard';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post('/create')
  @Roles(RolesEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createRoom(@Body() roomDto) {
    return this.roomService.createRoom(roomDto);
  }

  @Put(':id')
  @Roles(RolesEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateRoom(@Param() params: { id: string }, @Body() roomData) {
    return this.roomService.updateRoom(params.id, roomData);
  }

  @Delete(':id')
  @Roles(RolesEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteRoom(@Param() params: { id: string }) {
    return this.roomService.deleteRoom(params.id);
  }

  @Get('/get/:id')
  getRoom(@Param() params: { id: string }) {
    return this.roomService.getRoom(params.id);
  }

  @Get('/all')
  getAll() {
    return this.roomService.getAll();
  }

  @Get('/getHotelRooms')
  getRoomsFromHotel(@Query() { hotelId }) {
    return this.roomService.getRoomsFromHotel(hotelId);
  }

  @Put('/reserveRoom:id')
  reserveRoom(@Param() params: { id: string }, @Body() roomData) {
    return this.roomService.reserveRoom(params.id, roomData);
  }
}
