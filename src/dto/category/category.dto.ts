import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Bool } from '../../enum/bool.enum';
import { BaseDto } from '../core/base.dto';
import { ProductDto } from '../product/product.dto';
import { PromotionDto } from '../shop/promotion.dto';
import { CouponDto } from '../coupon/coupon.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';

export class CategoryDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Name must be defined!' })
  @IsString({ message: 'Name must be string!' })
  @MaxLength(128, { message: 'Maximum 128 characters supported' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Position must be defined!' })
  @IsInt({ message: 'Must be an integer value' })
  position: number;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Must be either 0 or 1' })
  isRootCategory: Bool;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(200, { message: 'Maximum 200 characters supported' })
  image: string;

  @Type(() => CategoryDto)
  children: CategoryDto[];

  @Type(() => CategoryDto)
  parent: CategoryDto;

  @Type(() => ProductDto)
  products: ProductDto[];

  @Type(() => PromotionDto)
  promotions: PromotionDto[];

  @Type(() => CouponDto)
  coupons: CouponDto[];
}

export class CategorySearchDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  name: string;

  @ApiProperty({
    required: false,
    default: '0',
    enum: ['0', '1'],
  })
  @IsOptional()
  @IsString()
  isRoot: string;
}
