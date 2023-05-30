import { BaseDto } from './base.dto';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RiskDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({}, { message: 'Must be a number' })
  percent: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(30, { message: 'Maximum 30 character supported' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(30, { message: 'Maximum 30 character supported' })
  color: string;
}
