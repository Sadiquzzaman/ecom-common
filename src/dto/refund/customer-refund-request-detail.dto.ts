import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDecimal,
  IsEnum,
  IsInt,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { RefundStatus } from '../../enum/refund-status.enum';
import { BaseDto } from '../core/base.dto';
import { ShopInvoiceDetailsDto } from '../payment/invoice/shop-invoice-details.dto';
import { ProductAttributeDto } from '../product/product-attribute.dto';
import { ProductDto } from '../product/product.dto';
import { CustomerRefundRequestDto } from './customer-refund-request.dto';

export class CustomerRefudnRequestDetailDto extends BaseDto {
  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttribute: ProductAttributeDto;

  @ApiProperty()
  @IsEnum(RefundStatus)
  refundStatus: RefundStatus;

  @ApiProperty()
  @IsInt()
  @Min(0)
  refundRequestQuantity: number;

  @IsDateString()
  refundRequestDate: Date;

  @ApiProperty()
  @IsInt()
  @Min(0)
  refundPickedQuantity: number;

  @IsDateString()
  refundPickedDate: Date;

  @ApiProperty()
  @IsInt()
  @Min(0)
  refundApprovedQuantity: number;

  @IsDateString()
  refundApprovedDate: Date;

  @ApiProperty()
  @IsDecimal()
  @Min(0)
  price: number;

  @IsString()
  @MaxLength(200)
  refundReason: String;

  @ApiProperty()
  @IsInt()
  @Min(0)
  refundableAmount: number;

  @Type(() => CustomerRefundRequestDto)
  customerRefundRequest: CustomerRefundRequestDto;

  @Type(() => ShopInvoiceDetailsDto)
  shopInvoiceDetail: ShopInvoiceDetailsDto;
}
