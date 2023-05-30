import { BaseDto } from '../core/base.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ProductDto } from '../product/product.dto';
import { ProductAttributeDto } from '../product/product-attribute.dto';
import { OrderDto } from './order.dto';
import { StockItemTransactionDto } from '../stock/stock-item-transaction.dto';

export class OrderDetailsDto extends BaseDto {
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

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttribute: ProductAttributeDto;

  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => StockItemTransactionDto)
  stockItemTransactions: StockItemTransactionDto[];
}
