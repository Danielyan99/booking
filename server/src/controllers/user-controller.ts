import {Body, Controller, Post} from "@nestjs/common";
import {UserService} from "@services/user-service";
import {UserDto} from "../dtos/user-dto";

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {
  }
  @Post('/signup')
  signup(@Body() dto: UserDto) {
    this.userService.signup(dto)
  }
  @Post('/signin')
  signin() {
    this.userService.signin()
  }
  @Post('/logout')
  logout() {
    this.userService.logout()
  }
  @Post('/refresh')
  refresh() {
    this.userService.refresh()
  }
}
