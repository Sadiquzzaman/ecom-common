import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator';
import { OrderStatus } from '../../enum/order-status.enum';
import { CartDto } from '../cart/cart.dto';
import { AddressDto } from '../core/address.dto';
import { BaseDto } from '../core/base.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { InvoiceDto } from '../payment/invoice/invoice.dto';
import { UserDto } from '../user/user.dto';
import { OrderDetailsDto } from './order-details.dto';
import { CustomerDto } from '../user/customer.dto';

export class OrderDto extends BaseDto {
  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(60, { message: 'Maximum 60 character supported' })
  reference: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(60, { message: 'Maximum 60 character supported' })
  coupon: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  deliveredAt: Date | null;

  @ApiProperty()
  @IsEnum(OrderStatus, { message: 'Must be a valid Order Status [0-5]' })
  status: OrderStatus;

  @Type(() => InvoiceDto)
  invoice: InvoiceDto;

  @Type(() => CartDto)
  cart: CartDto;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @Type(() => OrderDetailsDto)
  orderDetails: OrderDetailsDto[];

  @Type(() => AddressDto)
  billingAddress: AddressDto;

  @Type(() => AddressDto)
  shippingAddress: AddressDto;
}

export class OrderSearchFilterDto extends ApiQueryPaginationBaseDTO {
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

  @ApiProperty({
    description: 'order status',
    required: false,
    default: OrderStatus.Pending,
    enum: ['1', '2', '3', '4', '5'],
  })
  @IsOptional()
  @IsEnum(OrderStatus)
  orderStatus: number;
}
