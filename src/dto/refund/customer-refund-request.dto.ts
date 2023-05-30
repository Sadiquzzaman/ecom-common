import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDecimal, IsEnum, IsOptional, IsString, Min } from 'class-validator';
import { AssignStatus } from '../../enum/assign-status.enum';
import { RefundStatus } from '../../enum/refund-status.enum';
import { BaseDto } from '../core/base.dto';
import { RefundShipmentAssignmentDto } from '../dto.config';
import { OrderDto } from '../order/order.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { InvoiceDto } from '../payment/invoice/invoice.dto';
import { CustomerDto } from '../user/customer.dto';
import { CustomerRefudnRequestDetailDto } from './customer-refund-request-detail.dto';

export class CustomerRefundRequestDto extends BaseDto {
  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => InvoiceDto)
  invoice: InvoiceDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @IsString()
  @IsOptional()
  description: String;

  @IsEnum(AssignStatus)
  @IsOptional()
  assignStatus: AssignStatus;

  @IsDecimal()
  @IsOptional()
  @Min(0)
  totalRefundableAmount: Number;

  @Type(() => CustomerRefudnRequestDetailDto)
  refundRequestDetails: CustomerRefudnRequestDetailDto[];

  @Type(() => RefundShipmentAssignmentDto)
  refundShippingAssignment: RefundShipmentAssignmentDto[];
}

export class CustomerRefundRequestStatusDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    description: 'refund request status',
    required: false,
    default: RefundStatus.REFUND_REQUEST,
    enum: ['0', '1', '2'],
  })
  @IsEnum(RefundStatus)
  refundStatus: RefundStatus;

  @ApiProperty({
    description: 'refund request assign status',
    required: false,
    default: AssignStatus.UnAssigned,
    enum: ['0', '1', '2', '3', '4'],
  })
  @IsOptional()
  @IsEnum(AssignStatus)
  assignStatus: AssignStatus;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  customerID: String;

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
