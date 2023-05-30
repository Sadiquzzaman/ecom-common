import { BaseDto } from './base.dto';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CurrencyDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(60, { message: 'Maximum 60 character supported' })
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(3, { message: 'Maximum 3 character supported' })
  isoCode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(3, { message: 'Maximum 3 character supported' })
  numericIsoCode: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(5, { message: 'Maximum 5 character supported' })
  symbol: string;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 6 }, { message: 'Must be a number' })
  conversionRate: number;
}
