import { Body, Controller, Get, Post, Res, Req, UseGuards, Param } from '@nestjs/common';
import { UserService } from './user-service';
import { SignupDto } from './dto/signup-dto';
import { User } from './user-model';
import { SigninDto } from './dto/signin.dto';
import { Response, Request } from 'express';
import { JwtAuthGuard } from '../../guards/jwt-auth-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../helpers/roles/roles.decorator';
import { RolesEnum } from '../../helpers/roles/roles.enum';

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

  @Get('/refresh')
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const { refreshToken } = req.cookies;
    const userData = await this.userService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    return userData;
  }

  @Get('/users')
  @Roles(RolesEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get('/rooms/:id')
  async getRooms(@Param() params: { id: string }) {
    return await this.userService.getRooms(params.id);
  }
}
