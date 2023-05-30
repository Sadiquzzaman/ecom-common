import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { BaseDto } from '../../core/base.dto';
import { ProductAttributeDto } from '../../product/product-attribute.dto';
import { ProductDto } from '../../product/product.dto';
import { InvoiceDto } from './invoice.dto';

export class InvoiceDetailsDto extends BaseDto {
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
  @Min(0)
  totalAdditionalShippingCost: number;

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

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  totalDiscount: number;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttribute: ProductAttributeDto;

  @Type(() => InvoiceDto)
  invoice: InvoiceDto;
}
