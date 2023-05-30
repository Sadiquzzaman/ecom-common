import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { OrderDto } from '../order/order.dto';
import { InvoiceDto } from '../payment/invoice/invoice.dto';
import { CustomerDto } from '../user/customer.dto';
import { BaseDto } from './base.dto';
import { CountryDto } from './country.dto';
import { DistrictDto } from './district.dto';
import { StateDto } from './state.dto';
import { ThanaDto } from './thana.dto';

export class AddressDto extends BaseDto {
  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  alias: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  lastname: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  firstname: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  address: string;

  @Type(() => CountryDto)
  country: CountryDto;

  @Type(() => StateDto)
  state: StateDto;

  @Type(() => DistrictDto)
  district: DistrictDto;

  @Type(() => ThanaDto)
  thana: ThanaDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @Type(() => InvoiceDto)
  billingInvoices: InvoiceDto[];

  @Type(() => InvoiceDto)
  shippingInvoices: InvoiceDto[];

  @Type(() => OrderDto)
  billingOrders: OrderDto[];

  @Type(() => OrderDto)
  shippingOrders: OrderDto[];
}
