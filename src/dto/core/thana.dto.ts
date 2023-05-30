import { DistrictDto } from './district.dto';
import { ResidentialAreaDto } from './residential-area.dto';
import { BaseDto } from './base.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { Point } from '../location/point';
import { CouponDto } from '../coupon/coupon.dto';

export class ThanaDto extends BaseDto {
  @ApiProperty()
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

  @Type(() => DistrictDto)
  district: DistrictDto;

  @Type(() => ResidentialAreaDto)
  residentialAreas: ResidentialAreaDto[];

  @Type(() => CouponDto)
  coupons: CouponDto[];
}
