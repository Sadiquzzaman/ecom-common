import { BaseDto } from '../core/base.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  Min,
} from 'class-validator';
import { ProductDto } from '../product/product.dto';
import { ProductAttributeDto } from '../product/product-attribute.dto';
import { CartDto } from './cart.dto';
import { StockItemTransactionDto } from '../stock/stock-item-transaction.dto';

export class CartDetailsDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt({ message: 'Quantity should be an integer!' })
  @Min(1)
  quantity: number;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttribute: ProductAttributeDto;

  @Type(() => CartDto)
  cart: CartDto;

  @Type(() => StockItemTransactionDto)
  stockItemTransactions: StockItemTransactionDto[];
}
