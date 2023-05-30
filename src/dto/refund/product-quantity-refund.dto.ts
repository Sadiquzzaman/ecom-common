import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUUID, Min } from 'class-validator';
import { BaseDto } from '../core/base.dto';

export class ProductQuantityRefundDto extends BaseDto{
  @ApiProperty()
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid product ID' })
  refundRequestDetailId: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  quantity: number;
}
