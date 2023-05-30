import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MailFromDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  address: string;
}
