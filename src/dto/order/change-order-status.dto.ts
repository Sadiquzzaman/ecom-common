import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { OrderStatus } from '../../enum/order-status.enum';

export class ChangeOrderStatusDto {
  @ApiProperty()
  @IsEnum(OrderStatus, { message: 'Must be a valid Order Status [0-5]' })
  status: OrderStatus;
}
