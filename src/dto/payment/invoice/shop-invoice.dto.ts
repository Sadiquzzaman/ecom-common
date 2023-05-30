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
} from 'class-validator';
import { OrderDto } from '../../order/order.dto';
import { InvoiceDto } from './invoice.dto';
import { ShopDto } from '../../shop/shop.dto';
import { AddressDto } from '../../../dto/core/address.dto';
import { ApiQueryPaginationBaseDTO } from '../../pagination/api-query-pagination-base.dto';
import { PaymentMethodEnum } from '../../../enum/payment-method.enum';
import { MerchantDto } from '../../user/merchant.dto';
import { OrderStatus } from '../../../enum/order-status.enum';
import { AssignStatus } from '../../../enum/assign-status.enum';
import { ShipmentDeliveryAssignmentDto } from '../../shipment/shipment-delivery-assignment.dto';
import { ShopInvoiceDetailsDto } from './shop-invoice-details.dto';

export class ShopInvoiceDto extends BaseDto {
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

  @Type(() => ShopDto)
  shop: ShopDto;

  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => InvoiceDto)
  invoice: InvoiceDto;

  @Type(() => MerchantDto)
  merchant: MerchantDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  invoiceTotal: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // @Min(0)
  // shopInvoiceTotal: number;

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

  @Type(() => AddressDto)
  shopInvoiceDetails: ShopInvoiceDetailsDto;

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
  @IsEnum(OrderStatus)
  deliveryStatus: OrderStatus;

  @ApiProperty()
  @IsEnum(AssignStatus)
  assignStatus: AssignStatus;

  @Type(() => ShipmentDeliveryAssignmentDto)
  deliveryAssignment: ShipmentDeliveryAssignmentDto;
}

export class ShopInvoiceSearchDto extends ApiQueryPaginationBaseDTO {
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
  shopId: string;

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
