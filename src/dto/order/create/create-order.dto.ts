import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderDto } from '../order.dto';

export class CreateOrderDto extends OrderDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'User ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid user ID' })
  userID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'User ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid user ID' })
  cartID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Shipping Address ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid user ID' })
  shippingAddressId: string;
}
