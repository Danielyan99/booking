import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { RolesEnum } from '../../roles/roles.enum';

export class SignupDto {
  @IsString()
  @MinLength(2)
  @MaxLength(12)
  readonly name: string;

  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(12)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  role: RolesEnum;
}
