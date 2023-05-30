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
import { ShippingStatus } from '../../../../enum/shipping-status.enum';
import { RefundShippingType } from '../../../../enum/refun-shipping-type.enum';
import { RefundShipmentAssignmentDto } from '../refund-shipment-assignment.dto';

export class CreateRefundShipmentAssignmentDto extends RefundShipmentAssignmentDto {
  @ApiProperty({ required: true, type: String })
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  refundRequestId: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Delivery Man ID',
  })
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  transporterId: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Refund Approval ID',
  })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  refundApprovalId: string;

  // @ApiProperty({
  //   type: ShippingStatus,
  //   required: true,
  //   default: ShippingStatus.ASSIGNED,
  // })
  // @IsEnum({
  //   type: ShippingStatus,
  //   message: 'Must be a valid shipping status [1-5]',
  //   default: ShippingStatus.ASSIGNED,
  // })
  // status: ShippingStatus;

  // @ApiProperty({
  //   type: RefundShippingType,
  //   default: RefundShippingType.COLLECT_FROM_CUSTOMER,
  //   description: 'Refund Shipping Type',
  //   required: true,
  // })
  // @IsEnum({
  //   type: RefundShippingType,
  //   default: RefundShippingType.COLLECT_FROM_CUSTOMER,
  //   message: 'Must be a valid refund shipping type[1-3]',
  // })
  // shippingType: RefundShippingType;
}
