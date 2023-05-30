import { BaseDto } from './base.dto';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DistrictDto } from './district.dto';
import { CountryDto } from '../dto.config';
import { Type } from 'class-transformer';
import { Point } from '../location/point';

export class StateDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(7, { message: 'Maximum 7 character supported' })
  isoCode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  name: string;

  @Type(() => Point)
  location: Point;

  @Type(() => CountryDto)
  country: CountryDto;

  @Type(() => DistrictDto)
  districts: DistrictDto[];
}
