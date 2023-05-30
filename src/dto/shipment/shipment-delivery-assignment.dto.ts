import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { OrderStatus } from '../../enum/order-status.enum';
import { AddressDto } from '../core/address.dto';
import { BaseDto } from '../core/base.dto';
import { OrderDto } from '../order/order.dto';
import { ShopInvoiceDto } from '../payment/invoice/shop-invoice.dto';
import { ShopDto } from '../shop/shop.dto';
import { CustomerDto } from '../user/customer.dto';
import { TransporterDto } from '../user/transporter.dto';
import { AssignStatus } from '../../enum/assign-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { ShippingStatus } from '../../enum/shipping-status.enum';

export class ShipmentDeliveryAssignmentDto extends BaseDto {
  @Type(() => ShopInvoiceDto)
  shopInvoice: ShopInvoiceDto;

  @Type(() => TransporterDto)
  transporter: TransporterDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @IsString()
  @IsNotEmpty()
  assignedAt: Date;

  @IsString()
  @IsOptional()
  deliveredAt: Date;

  @IsString()
  @IsNotEmpty()
  expectedShipmentDate: Date;

  @IsString()
  @IsNotEmpty()
  expectedDeliveryDate: Date;

  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => AddressDto)
  shippingAddress: AddressDto;

  @IsString()
  @IsNotEmpty()
  shopLocation: String;

  @Type(() => ShopDto)
  shop: ShopDto;

  @IsEnum(ShippingStatus)
  status: ShippingStatus;

  @IsNumber()
  @IsOptional()
  amount: Number;

  @IsString()
  remark: String;

  @IsNumber()
  @IsOptional()
  additionalCost: Number;
}

export class ShipmentAssignmentDeliveryStatusDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    description: 'Assign status',
    required: false,
    default: AssignStatus.UnAssigned,
    enum: ['0', '1'],
  })
  @IsEnum(AssignStatus)
  assignStatus: string;

  @ApiProperty({
    description: 'Shipping status',
    required: false,
    default: ShippingStatus.ASSIGNED,
    enum: ['1', '2', '3'],
  })
  @IsEnum(ShippingStatus)
  shippingStatus: number;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  shopId: string;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  customerId: string;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  transporterId: string;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  refundApprovalBool: string;

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
