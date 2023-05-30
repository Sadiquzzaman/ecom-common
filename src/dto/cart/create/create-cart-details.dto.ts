import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsUUID, Min } from 'class-validator';
import { CartDetailsDto } from '../cart-details.dto';

export class CreateCartDetailsDto extends CartDetailsDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid product ID' })
  productID: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID('all', { message: 'Must be a valid productAttribute ID' })
  productAttributeID: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt({ message: 'Quantity should be an integer!' })
  @Min(1)
  quantity: number;
}
