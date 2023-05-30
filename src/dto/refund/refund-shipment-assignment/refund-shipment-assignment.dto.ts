import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { CustomerDto } from '../../user/customer.dto';
import { ShippingStatus } from '../../../enum/shipping-status.enum';
import { RefundShippingType } from '../../../enum/refun-shipping-type.enum';
import { ProductAttributeDto } from '../../product/product-attribute.dto';
import { ProductDto } from '../../product/product.dto';
import { CustomerRefundRequestDto } from '../customer-refund-request.dto';
import { OrderDto } from '../../order/order.dto';
import { TransporterDto } from '../../user/transporter.dto';
import { BaseDto } from '../../core/base.dto';
import { RefundApprovalDto } from '../refund-approval/refund-approval.dto';

export class RefundShipmentAssignmentDto extends BaseDto {
  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => CustomerRefundRequestDto)
  refundRequest: CustomerRefundRequestDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @Type(() => TransporterDto)
  transporter: TransporterDto;

  @IsOptional()
  @IsEnum({
    type: ShippingStatus,
    message: 'Must be a valid shipping status [1-5]',
    default: ShippingStatus.ASSIGNED,
  })
  status: ShippingStatus;

  @IsOptional()
  @IsDateString()
  assignedAt: Date;

  @IsOptional()
  @IsDateString()
  pickedAt: Date;

  @IsOptional()
  @IsDateString()
  receivedAt: Date;

  @IsOptional()
  @IsString()
  pickFrom: string;

  @IsOptional()
  @IsString()
  shipTo: string;

  @ApiProperty({
    description: 'expected date of product pickup from customer',
    default: '2022-01-01',
    required: false,
  })
  @IsString()
  expectedPickUpDate: Date;

  // @IsEnum({
  //   type: RefundShippingType,
  //   default: RefundShippingType.COLLECT_FROM_CUSTOMER,
  // })
  // shippingType: RefundShippingType;

  @IsOptional()
  @IsEnum({
    type: RefundShippingType,
    default: RefundShippingType.COLLECT_FROM_CUSTOMER,
    message: 'Must be a valid refund shipping type[1-3]',
  })
  shippingType: RefundShippingType;

  @Type(() => RefundApprovalDto)
  refundApproval: RefundApprovalDto;
}

export class RefundShipmentAssignmentStatusDto {
  // @ApiProperty({ required: true, type: ShippingStatus })
  // @IsEnum({
  //   type: ShippingStatus,
  //   message: 'Must be a valid shipping status [1-5]',
  //   default: ShippingStatus.ASSIGNED,
  // })
  // status: number;

  @ApiProperty({
    description: 'refund request status',
    required: false,
    default: ShippingStatus.ASSIGNED,
    enum: ['1', '2', '3', '4', '5'],
  })
  @IsEnum(ShippingStatus)
  status: ShippingStatus;

  // @IsDateString()
  // date: Date;
}
