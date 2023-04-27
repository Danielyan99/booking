import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoomService } from './room-service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post('/create')
  async createRoom(@Body() roomDto) {
    return this.roomService.createRoom(roomDto);
  }

  @Get('/getHotelRooms')
  async getRoomsFromHotel(@Query() { hotelId }) {
    const rooms = await this.roomService.getRoomsByHotel(hotelId);
    return rooms;
  }
}
