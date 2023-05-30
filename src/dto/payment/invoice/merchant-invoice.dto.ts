import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { InvoiceStatus } from '../../../enum/invoice-status.enum';
import { BaseDto } from '../../core/base.dto';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  IsPositive,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { OrderDto } from '../../order/order.dto';
import { InvoiceDto } from '../../payment/invoice/invoice.dto';
import { MerchantDto } from '../../user/merchant.dto';
import { AddressDto } from '../../../dto/core/address.dto';
import { ApiQueryPaginationBaseDTO } from '../../pagination/api-query-pagination-base.dto';
import { PaymentMethodEnum } from '../../../enum/payment-method.enum';

export class MerchantInvoiceDto extends BaseDto {
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

  @Type(() => MerchantDto)
  merchant: MerchantDto;

  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => InvoiceDto)
  invoice: InvoiceDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  invoiceTotal: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  commision: number;

  @Type(() => AddressDto)
  billingAddress: AddressDto;

  @Type(() => AddressDto)
  shippingAddress: AddressDto;
}

export class MerchantInvoiceSearchDto extends ApiQueryPaginationBaseDTO {
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
  merchantId: string;

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
