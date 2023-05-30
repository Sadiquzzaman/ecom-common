import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderDto } from '../order.dto';

export class CreateOrderDetailsDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid product ID' })
  productID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'ProductAttribute ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid productAttribute ID' })
  productAttributeID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Order ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid order ID' })
  orderID: string;
}
