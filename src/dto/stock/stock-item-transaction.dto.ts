import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Bool } from '../../enum/bool.enum';
import { StockStatus } from '../../enum/stock-status.enum';
import { BaseDto } from '../core/base.dto';
import { Type } from 'class-transformer';
import { ProductDto } from '../product/product.dto';
import { ProductAttributeDto } from '../product/product-attribute.dto';
import { CartDetailsDto } from '../cart/cart-details.dto';
import { OrderDetailsDto } from '../order/order-details.dto';
import { StockPurchaseDto } from './stock-purchase.dto';

export class StockItemTransactionDto extends BaseDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  purchasingPrice: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sellingPrice: number;

  @ApiProperty()
  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  sellingAt: Date | null;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  discount: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  couponDiscount: number;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Bool, { message: 'Must be a valid Order Status [0-1]' })
  isFreeGift: Bool;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(StockStatus, { message: 'Must be a valid Order Status [0-3]' })
  status: StockStatus;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttribute: ProductAttributeDto;

  @Type(() => StockPurchaseDto)
  stockPurchase: StockPurchaseDto;

  @Type(() => CartDetailsDto)
  cartDetails: CartDetailsDto;

  @Type(() => OrderDetailsDto)
  orderDetails: OrderDetailsDto;

}
