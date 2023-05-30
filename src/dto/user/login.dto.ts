import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { Bool } from '../../enum/bool.enum';

export class LoginDto {
  @ApiProperty({ default: '01957206205' })
  @IsOptional()
  @IsString({ message: 'Phone must be a string' })
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Email must be a string' })
  email: string;

  @ApiProperty({ default: 's1234' })
  @IsDefined({ message: 'Password must be defined' })
  @IsString({ message: 'Password must be a string' })
  password: string;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Can be either 0 or 1' })
  isChecked: Bool;
}
