import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { InvoiceStatus } from '../../../enum/invoice-status.enum';
import { BaseDto } from '../../core/base.dto';
import { UserDto } from '../../user/user.dto';
import { InvoiceDetailsDto } from './invoice-details.dto';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateIf,
  IsNumber,
  Min,
  IsOptional,
} from 'class-validator';
import { AddressDto } from '../../../dto/core/address.dto';
import { OrderDto } from '../../order/order.dto';
import { ApiQueryPaginationBaseDTO } from '../../pagination/api-query-pagination-base.dto';
import { PaymentMethodEnum } from '../../../enum/payment-method.enum';
export class InvoiceDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  invoiceTotal: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  totalDiscount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  totalShippingCost: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  totalAdditionalShippingCost: number;

  @ApiProperty()
  @ValidateIf((o) => !o.datePaid)
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  dateApplied: Date | null;

  @ApiProperty()
  @ValidateIf((o) => !o.dateApplied)
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  datePaid: Date | null;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @IsEnum(InvoiceStatus, { message: 'Can be either paid or unpaid' })
  status: InvoiceStatus;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsEnum(PaymentMethodEnum, {
    message: 'Can be either 1(CashOnDelivery) or 2(Online)',
  })
  paymentMethod: PaymentMethodEnum;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => InvoiceDetailsDto)
  invoiceDetails: InvoiceDetailsDto[];

  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => AddressDto)
  billingAddress: AddressDto;

  @Type(() => AddressDto)
  shippingAddress: AddressDto;
}

export class AdminInvoiceSearchDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    required: false,
    default: '1',
    enum: ['0', '1'],
  })
  @IsOptional()
  @IsString()
  isApproved: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  customerId: string;

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
