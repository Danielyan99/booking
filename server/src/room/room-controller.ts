import { Controller, Get } from '@nestjs/common';
import { RoomService } from './room-service';

@Controller('hotel')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get('/all')
  async getHotels() {
    return this.roomService.getAll();
  }
}
