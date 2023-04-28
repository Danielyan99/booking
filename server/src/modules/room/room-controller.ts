import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RoomService } from './room-service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post('/create')
  createRoom(@Body() roomDto) {
    return this.roomService.createRoom(roomDto);
  }

  @Put(':id')
  updateRoom(@Param() params: { id: string }, @Body() roomData) {
    return this.roomService.updateRoom(params.id, roomData);
  }

  @Delete(':id')
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
}
