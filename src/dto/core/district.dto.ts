import { ThanaDto } from './thana.dto';
import { BaseDto } from './base.dto';
import { StateDto } from './state.dto';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Point } from '../location/point';

export class DistrictDto extends BaseDto {
  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(7, { message: 'Maximum 7 character supported' })
  isoCode: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Can not be empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  name: string;

  @Type(() => Point)
  location: Point;

  @Type(() => StateDto)
  state: StateDto;

  @Type(() => ThanaDto)
  thanas: ThanaDto[];

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
      { maxDecimalPlaces: 6 },
      { message: 'Should be a number with at most 6 decimal places' },
  )
  shippingCost: number;
}
