import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator';
import { CartDto } from '../cart/cart.dto';
import { CategoryDto } from '../category/category.dto';
import { BaseDto } from '../core/base.dto';
import { ThanaDto } from '../core/thana.dto';
import { OrderDto } from '../order/order.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { ProductAttributeDto } from '../product/product-attribute.dto';
import { ProductDto } from '../product/product.dto';
import { ShopDto } from '../shop/shop.dto';
import { UserDto } from '../user/user.dto';
import { CouponUsageDto } from './coupon-usage.dto';

export class CouponDto extends BaseDto {
  @ApiProperty({ default: new Date(), required: true })
  @IsNotEmpty({ message: 'Date must be defined' })
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  startDate: Date | null;

  @ApiProperty({ default: new Date(), required: true })
  @IsNotEmpty({ message: 'Date must be defined' })
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  endDate: Date | null;

  @ApiProperty({
    default:
      'a coupon is a ticket or document that can be redeemed for a financial discount or rebate when purchasing a product.',
    required: true,
  })
  @IsNotEmpty({ message: 'Description must be defined' })
  @IsString({ message: 'Description must be string' })
  @MaxLength(250, { message: 'Maximum 250 characters supported' })
  description: string;

  @ApiProperty({ default: 1, required: true })
  @IsNotEmpty({ message: 'Quantity must be defined' })
  @IsInt({ message: 'Quantity must be integer' })
  quantity: number;

  @ApiProperty({ default: 1, required: true })
  @IsNotEmpty({ message: 'QuantityPerUser must be defined' })
  @IsInt({ message: 'QuantityPerUser must be integer' })
  quantityPerUser: number;

  @ApiProperty({ default: 1, required: true })
  @IsNotEmpty({ message: 'Priority must be defined' })
  @IsInt({ message: 'Priority must be integer' })
  priority: number;

  @ApiProperty({ default: 'EID2021', required: true })
  @IsNotEmpty({ message: 'CouponCode must be defined' })
  @IsString({ message: 'CouponCode must be string' })
  @MaxLength(100, { message: 'Maximum 100 characters supported' })
  couponCode: string;

  @ApiProperty({ default: 10, required: true })
  @IsNotEmpty({ message: 'MinimumAmount must be defined' })
  minimumAmount: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'ReductionPercent must be defined' })
  reductionPercent: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'ReductionAmount must be defined' })
  reductionAmount: number;

  // @ApiProperty()
  @Type(() => UserDto)
  users: UserDto[];

  // @ApiProperty()
  @Type(() => ShopDto)
  shops: ShopDto[];

  // @ApiProperty()
  @Type(() => ProductDto)
  products: ProductDto[];

  // @ApiProperty()
  @Type(() => CategoryDto)
  categories: CategoryDto[];

  // @ApiProperty()
  @Type(() => ThanaDto)
  thanas: ThanaDto[];

  // @ApiProperty()
  @Type(() => ProductDto)
  freeProduct: ProductDto;

  // @ApiProperty()
  @Type(() => ProductAttributeDto)
  freeProductAttribute: ProductAttributeDto;

  @Type(() => CouponUsageDto)
  couponUsages: CouponUsageDto[];

  @Type(() => CartDto)
  carts: CartDto[];

  @Type(() => OrderDto)
  orders: OrderDto[];
}

export class CouponPaginationSearchFilter extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  couponCode: String;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  fromDate: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  toDate: string;
}
