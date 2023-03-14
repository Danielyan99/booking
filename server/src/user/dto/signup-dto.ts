import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { RolesEnum } from '../../roles/roles.enum';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  role: RolesEnum;
}
