import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ShippingStatus } from '../../../enum/shipping-status.enum';

export class ShippingStatusUpdateDto {
  @ApiProperty({
    description: 'order sort',
    required: false,
    default: ShippingStatus.ASSIGNED,
    enum: ['1', '2', '3'],
  })
  @IsEnum(ShippingStatus)
  status: number;
}
