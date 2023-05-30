import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  Allow,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { ShopManagerDto } from '../../dto/user/shop-manager.dto';
import { ActiveStatus } from '../../enum/active.enum';
import { OrderStatus } from '../../enum/order-status.enum';
import { BaseDto } from '../core/base.dto';
import { CouponDto } from '../coupon/coupon.dto';
import { Point } from '../location/point';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { ProductDto } from '../product/product.dto';
import { MerchantDto } from '../user/merchant.dto';
import { ShopReviewDto } from './shop-review.dto';
import { ShopTypeDto } from './shop-type.dto';

export class ShopDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  domain: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  @IsUrl({}, { message: 'Must be a valid url' })
  url: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Should be a number with at most 2 decimal places' },
  )
  @Max(5)
  @Min(0)
  rating: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Popular should be an integer!' })
  @Min(0)
  popular: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Trending should be an integer!' })
  @Min(0)
  trending: number;

  @ApiProperty()
  @IsOptional()
  @Min(0)
  @Max(100)
  commission: number;

  @ApiProperty()
  @Allow()
  @Type(() => Point)
  geoLocation: Point;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  shopProfileImage: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  shopCoverImage: string;

  @IsOptional()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(ActiveStatus, { message: 'Can be either 0 or 1' })
  isApproved: ActiveStatus;

  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  approvedBy: string | null;

  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  approvedAt: Date | null;

  @Type(() => ShopTypeDto)
  shopType: ShopTypeDto;

  @Type(() => MerchantDto)
  merchant: MerchantDto;

  @Type(() => ProductDto)
  products: ProductDto[];

  @Type(() => ShopReviewDto)
  reviews: ShopReviewDto[];

  @Type(() => CouponDto)
  coupons: CouponDto[];

  @IsOptional()
  @Type(() => ShopManagerDto)
  shopManagers: ShopManagerDto[];
}

export class ShopSearchDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  name: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  merchantId: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  shopTypeId: string;

  @ApiProperty({
    required: false,
    default: '1',
    enum: ['0', '1'],
  })
  @IsOptional()
  @IsString()
  isApproved: string;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  location: string;
}
