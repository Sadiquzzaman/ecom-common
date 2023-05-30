import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsOptional } from 'class-validator';
import { CartDto } from '../cart.dto';
import { CreateCartDetailsDto } from './create-cart-details.dto';

export class CreateCartDto extends CartDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'User ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid user ID' })
  userID: string;

  @ApiProperty({ type: [CreateCartDetailsDto] })
  @IsNotEmpty({ message: 'Cart details must be defined' })
  cartDetails: CreateCartDetailsDto[];

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  couponCode: string;
}
