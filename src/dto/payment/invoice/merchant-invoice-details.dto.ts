import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../core/base.dto';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  IsPositive,
  IsAlpha,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ProductDto } from '../../product/product.dto';
import { ProductAttributeDto } from '../../product/product-attribute.dto';
import { MerchantInvoiceDto } from './merchant-invoice.dto';
import { ShopDto } from '../../shop/shop.dto';

export class MerchantInvoiceDetailsDto extends BaseDto {
  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  additional: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  note: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt({ message: 'Quantity should be an integer!' })
  @Min(1)
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  vat: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  additionalShippingCost: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  grandTotal: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  commision: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  discount: number;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttribute: ProductAttributeDto;

  @Type(() => MerchantInvoiceDto)
  merchantInvoice: MerchantInvoiceDto;

  @Type(() => ShopDto)
  shop: ShopDto;
}
