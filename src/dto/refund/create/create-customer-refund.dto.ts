import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { CustomerRefundRequestDto } from '../customer-refund-request.dto';
import { CreateProductRefundReason } from './create-product-refund-reason.dto';

export class CreateCustomerRefundRequestDto extends CustomerRefundRequestDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Order ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid order ID' })
  orderID: string;

  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      {
        productID: 'productID',
        productAttributeID: 'productAttribureID',
        shopInvoiceDetailID: 'shopInvoiceID',
        quantity: 1,
        refundReason: 'Borken Product',
      },
    ],
    type: [CreateProductRefundReason],
  })
  @IsNotEmpty()
  @IsArray()
  productRefundReason: CreateProductRefundReason[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  additionalInformation: string;
}
