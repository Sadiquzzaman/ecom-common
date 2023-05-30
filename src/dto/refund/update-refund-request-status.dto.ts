import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { AssignStatus } from '../../enum/assign-status.enum';
import { BaseDto } from '../core/base.dto';
import { ProductQuantityRefundDto } from './product-quantity-refund.dto';

export class UpdateCustomerRefundRequestDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Transform((value) => parseInt(value.value))
  refundRequestStatus: Number; // RefundStatus

  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      {
        refundRequestDetailId: 'id',
        quantity: 1,
      },
    ],
    type: [ProductQuantityRefundDto],
  })
  @IsNotEmpty()
  @IsArray()
  refundProductQuantity: ProductQuantityRefundDto[];

  @ApiProperty({
    description: 'refund request assign status',
    required: false,
    default: AssignStatus.UnAssigned,
    enum: ['0', '1', '2', '3', '4'],
  })
  @IsOptional()
  @IsEnum(AssignStatus)
  assignStatus: number;
}
