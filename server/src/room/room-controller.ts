import { Body, Controller, Post } from '@nestjs/common';
import { RoomService } from './room-service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post('/create')
  async createRoom(@Body() roomDto) {
    return this.roomService.createRoom(roomDto);
  }
}
