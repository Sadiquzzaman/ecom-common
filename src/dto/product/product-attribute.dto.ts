import { BaseDto } from '../core/base.dto';
import { ProductDto } from './product.dto';
import { AttributeDto } from './attribute/attribute.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { CouponDto } from '../coupon/coupon.dto';
import { CartDetailsDto } from '../cart/cart-details.dto';
import { OrderDetailsDto } from '../order/order-details.dto';
import { InvoiceDetailsDto } from '../payment/invoice/invoice-details.dto';
import { StockPurchaseDto } from '../stock/stock-purchase.dto';
import { StockItemTransactionDto } from '../stock/stock-item-transaction.dto';

export class ProductAttributeDto extends BaseDto {
  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(60, { message: 'Maximum 60 character supported' })
  reference: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt({ message: 'Quantity should be an integer!' })
  @Min(0)
  quantity: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Reserved should be an integer!' })
  reserved: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Sold should be an integer!' })
  sold: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  weight: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
      { maxDecimalPlaces: 6 },
      { message: 'Should be a number with at most 6 decimal places' },
  )
  purchasedPrice: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  discount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  wholesalePrice: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  additionalShippingCost: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string!' })
  image: string;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => CartDetailsDto)
  cartDetails: CartDetailsDto[];

  @Type(() => OrderDetailsDto)
  orderDetails: OrderDetailsDto[];

  @Type(() => InvoiceDetailsDto)
  invoiceDetails: InvoiceDetailsDto[];

  @Type(() => StockPurchaseDto)
  stockPurchases: StockPurchaseDto[];

  @Type(() => StockItemTransactionDto)
  stockItemTransactions: StockItemTransactionDto[];

  @Type(() => AttributeDto)
  attributes: AttributeDto[];

  @Type(() => CouponDto)
  freeCoupons: CouponDto[];
}
