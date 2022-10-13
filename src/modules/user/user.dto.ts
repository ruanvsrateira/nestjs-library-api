import { IsEmail, IsString } from 'class-validator';

export class UserDTO {
  id?: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
