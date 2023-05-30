import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsOptional
} from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { Type } from 'class-transformer';
import { ProductDto } from '../product/product.dto';
import { ProductAttributeDto } from '../product/product-attribute.dto';
import { StockItemTransactionDto } from './stock-item-transaction.dto';

export class StockPurchaseDto extends BaseDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  inHand: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  inCart: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  inOrder: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  defective: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  returned: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  purchasedPrice: number;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttribute: ProductAttributeDto;

  @Type(() => StockItemTransactionDto)
  stockItemTransactions: StockItemTransactionDto[];

}
