import { BaseDto } from '../core/base.dto';
import { Type } from 'class-transformer';
import { OrderDto } from '../order/order.dto';
import { CartDetailsDto } from './cart-details.dto';
import { UserDto } from '../user/user.dto';
import { CouponDto } from '../coupon/coupon.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsEmpty,
  IsInt,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';
import { CustomerDto } from '../user/customer.dto';

export class CartDto extends BaseDto {
  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @Type(() => CartDetailsDto)
  cartDetails: CartDetailsDto[];

  @Type(() => CouponDto)
  coupon: CouponDto;

  @ApiProperty()
  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  additionalShippingCost?: number;
}
