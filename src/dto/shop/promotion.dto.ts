import { ActiveStatus } from './../../enum/active.enum';
import { MerchantDto } from './../user/merchant.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsInt,
  IsEnum,
  IsEmpty,
  IsOptional,
  IsDecimal,
} from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { ProductDto } from '../product/product.dto';
import { UserDto } from '../user/user.dto';
import { ShopDto } from './shop.dto';
import { PromotionType } from '../../enum/promotion-type.enum';
import { CategoryDto } from '../category/category.dto';
import { ShopTypeDto } from './shop-type.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { PromotionSlotDto } from '../shop/promotions-slot.dto';
import { InvoiceStatus } from '../../enum/invoice-status.enum';
import { PromotionStatus } from '../../enum/promotion-status.enum';

export class PromotionDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  startDate: Date | null;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  endDate: Date | null;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  promotionCoverImage: string;

  @IsOptional()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(ActiveStatus, { message: 'Can be either 0 or 1' })
  isApproved: ActiveStatus;

  // @ApiProperty()
  // @IsString({ message: 'Must be a string' })
  // @MaxLength(30, { message: 'Maximum 30 character supported' })
  // titleColor: string;

  // @ApiProperty()
  // @IsEmpty()
  // @IsString({ message: 'Must be a string' })
  // @MaxLength(30, { message: 'Maximum 30 character supported' })
  // descriptionColor: string;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(PromotionType, { message: 'Must be either 1, 2 or 3' })
  type: PromotionType;

  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  approvedBy: string | null;

  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  approvedAt: Date | null;

  @ApiProperty()
  @IsOptional()
  @IsDecimal()
  amount: number;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  trnxId: string;

  @ApiProperty()
  @IsEnum(PromotionStatus)
  promotionStatus: PromotionStatus;

  @Type(() => ShopDto)
  shop: ShopDto;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => MerchantDto)
  merchant: MerchantDto;

  @Type(() => CategoryDto)
  category: CategoryDto;

  @Type(() => ShopTypeDto)
  shopType: ShopTypeDto;

  @Type(() => PromotionSlotDto)
  promotionsSlot: PromotionSlotDto;
}

export class PromotionSearchDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    required: false,
    default: '1',
    enum: ['0', '1'],
  })
  @IsOptional()
  @IsString()
  isApproved: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  merchantId: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  shopId: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  productId: string;

  @ApiProperty({
    required: false,
    default: '1',
    enum: ['1', '2', '3'],
  })
  @IsOptional()
  @IsString()
  promotionType: string;

  @ApiProperty({
    required: false,
    default: '1',
    enum: ['1', '2', '3', '4', '5'],
  })
  @IsOptional()
  @IsString()
  promotionStatus: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  fromDate: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  toDate: string;
}
