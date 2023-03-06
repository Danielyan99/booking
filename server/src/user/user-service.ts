import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup-dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user-model';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService,
  ) {}

  async signup(userDto: SignupDto): Promise<{ token: string }> {
    const { name, email, password } = userDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(email, password, name);
    const user = await this.userModel.create({
      email,
      password: hashedPassword,
      name,
    });

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  async signin(userDto: SigninDto): Promise<{ token: string }> {
    const { email, password } = userDto;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  logout() {
    console.log('logout');
  }

  refresh() {
    console.log('refresh');
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  validateUser(username) {
    console.log('Validate User');
    return { user: 'asdasdasd' };
  }
}
