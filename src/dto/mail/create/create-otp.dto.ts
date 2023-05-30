import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';

export class CreateOtpDto {
  @ApiProperty()
  @ValidateIf((o) => !o.email)
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @ValidateIf((o) => !o.phone)
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  otp: number;
}
