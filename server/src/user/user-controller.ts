import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user-service';
import { SignupDto } from './dto/signup-dto';
import { User } from './user-model';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  signup(@Body() userDto: SignupDto): Promise<{ token: string }> {
    return this.userService.signup(userDto);
  }

  @Post('/signin')
  signin(@Body() userDto: SigninDto) {
    return this.userService.signin(userDto);
  }

  @Post('/logout')
  logout() {
    this.userService.logout();
  }

  @Post('/refresh')
  refresh() {
    this.userService.refresh();
  }

  @Get('/users')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
