import { BaseDto } from '../core/base.dto';
import { NoteDto } from '../core/note.dto';
import { RiskDto } from '../core/risk.dto';
import { AddressDto } from '../core/address.dto';
import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { UserDto } from './user.dto';
import { CartDto } from '../cart/cart.dto';
import { OrderDto } from '../order/order.dto';
import { ShopInvoiceDto } from '../payment/invoice/shop-invoice.dto';

export class CustomerDto extends BaseDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 6 }, { message: 'Should be a number' })
  outstandingAllowAmount: number;

  @ApiProperty()
  @IsNumber({}, { message: 'Should be a number' })
  @IsInt({ message: 'Should be an unsigned number' })
  @Min(15)
  maxPaymentDays: number;

  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => RiskDto)
  risk: RiskDto;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => CartDto)
  carts: CartDto[];

  @Type(() => OrderDto)
  orders: OrderDto[];

  @Type(() => ShopInvoiceDto)
  shopInvoices: ShopInvoiceDto[];

  @Type(() => AddressDto)
  billingAddress: AddressDto;

  @Type(() => AddressDto)
  shippingAddresses: AddressDto[];
}

export class CustomerSearchDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  firstName: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  phone: string;
}
