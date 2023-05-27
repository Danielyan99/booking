import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup-dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user-model';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/signin.dto';
import { TokenService } from '../token/token-service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async signup(userData: SignupDto) {
    const { name, email, password, role } = userData;
    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new BadRequestException('emailIsAlreadyRegisteredHint');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await this.userModel.create({
      email,
      password: hashedPassword,
      name,
      role,
    });

    const userDto = new UserDto(createdUser);
    const tokens = this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, ...userDto };
  }

  async signin(userData: SigninDto) {
    const { email, password } = userData;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new BadRequestException('Invalid email or password');
    }

    const userDto = new UserDto(user);
    const tokens = this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, ...userDto };
  }

  async logout(refreshToken) {
    const token = await this.tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    const userData = this.tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await this.tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      throw new UnauthorizedException();
    }
    const user = await this.userModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = this.tokenService.generateTokens({ ...userDto });

    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, ...userDto };
  }

  async changePassword(id, data) {
    const user = await this.userModel.findById(id);
    const isPasswordMatched = await bcrypt.compare(data.lastPassword, user.password);

    if (!isPasswordMatched) {
      throw new BadRequestException('Invalid Password');
    }
    const hashedPassword = await bcrypt.hash(data.newPassword, 10);

    user.password = hashedPassword;
    return await user.save();
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getRooms(id) {
    const user = await this.userModel.findById(id);
    const data = await user.populate('rooms');
    const reservedRooms = user.reservedRooms;
    return { reservedRooms, rooms: data.rooms };
  }
}
