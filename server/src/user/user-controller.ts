import { Body, Controller, Get, Post, Res, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user-service';
import { SignupDto } from './dto/signup-dto';
import { User } from './user-model';
import { SigninDto } from './dto/signin.dto';
import { Response, Request } from 'express';
import { JwtAuthGuard } from '../guards/jwt-auth-guard';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  async signup(@Body() userDto: SignupDto, @Res({ passthrough: true }) res: Response) {
    const userData = await this.userService.signup(userDto);
    await res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    return userData;
  }

  @Post('/signin')
  async signin(@Body() userDto: SigninDto, @Res({ passthrough: true }) res: Response) {
    const userData = await this.userService.signin(userDto);
    await res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    return userData;
  }

  @Post('/logout')
  async logout(@Req() req: Request) {
    const { refreshToken } = req.cookies;
    const token = await this.userService.logout(refreshToken);
    return token;
  }

  @Post('/refresh')
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const { refreshToken } = req.cookies;
    const userData = await this.userService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    return userData;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
