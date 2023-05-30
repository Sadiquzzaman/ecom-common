import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Min
} from 'class-validator';
import { CustomerRefundRequestDto } from '../customer-refund-request.dto';

export class CreateProductRefundReason extends CustomerRefundRequestDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid product ID' })
  productID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'ProductAttribute ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid productAttribute ID' })
  productAttributeID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'ProductAttribute ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid productAttribute ID' })
  shopInvoiceDetailID: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  refundReason: string;
}
