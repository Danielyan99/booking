import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup-dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user-model';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/signin.dto';
import { TokenService } from '../token/token-service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async signup(userDto: SignupDto) {
    const { name, email, password } = userDto;
    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new UnauthorizedException('Email is already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await this.userModel.create({
      email,
      password: hashedPassword,
      name,
    });

    const tokens = this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(createdUser._id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async signin(userDto: SigninDto) {
    const { email, password } = userDto;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const tokens = this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, user };
  }

  async logout(refreshToken) {
    const token = await this.tokenService.removeToken(refreshToken);
    return token;
  }

  refresh() {
    console.log('refresh');
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
}
