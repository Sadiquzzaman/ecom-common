import { RefundShipmentAssignmentDto } from './../refund-shipment-assignment/refund-shipment-assignment.dto';
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
import { Bool } from '../../../enum/bool.enum';
import { AssignStatus } from '../../../enum/assign-status.enum';
import { RefundShippingType } from '../../../enum/refun-shipping-type.enum';
import { ProductAttributeDto } from '../../product/product-attribute.dto';
import { ProductDto } from '../../product/product.dto';
import { CustomerRefundRequestDto } from '../customer-refund-request.dto';
import { OrderDto } from '../../order/order.dto';
import { TransporterDto } from '../../user/transporter.dto';
import { BaseDto } from '../../core/base.dto';
import { ShopDto } from '../../shop/shop.dto';
import { AddressDto } from '../../core/address.dto';
import { RefundApprovalDetailsDto } from './refund-approval-details.dto';

export class RefundApprovalDto extends BaseDto {
  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => CustomerRefundRequestDto)
  refundRequest: CustomerRefundRequestDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @Type(() => ShopDto)
  shop: ShopDto;

  @Type(() => AddressDto)
  address: AddressDto;

  @IsEnum({
    type: Bool,
    message: 'Must be a valid type [0-1]',
    default: Bool.No,
  })
  isApproved: Bool;

  @IsOptional()
  @IsEnum({
    type: AssignStatus,
    message: 'Must be a valid assign status [0-4]',
    default: AssignStatus.UnAssigned,
  })
  assignStatus: AssignStatus;

  @Type(() => RefundApprovalDetailsDto)
  refundApprovalDetails: RefundApprovalDetailsDto[];

  @Type(() => RefundApprovalDetailsDto)
  refundShipmentAssignment: RefundShipmentAssignmentDto;
}
