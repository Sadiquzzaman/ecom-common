import { ApiProperty } from '@nestjs/swagger';
import { Type, Transform } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';
import { PromotionType } from '../../enum/promotion-type.enum';
import { BaseDto } from '../core/base.dto';
import { PromotionDto } from './promotion.dto';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';

export class CheckPromotionSlotDto extends BaseDto {
  @ApiProperty({
    type: PromotionType,
    default: PromotionType.Banner,
    description: 'Promotion Type',
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(PromotionType, { message: 'Must be a valid status [1-3]' })
  promotionType: PromotionType;

  @ApiProperty({
    default: '17c5cbe4-1d97-45fc-b300-370b16b0c4fb',
    description: 'Shop ID',
    required: false,
  })
  @ValidateIf((o) => o.promotionType == PromotionType.Shop)
  @IsString()
  @IsNotEmpty({ message: 'Shop ID must be defined' })
  @MaxLength(100)
  shopId: string;

  @ApiProperty({
    default: '6ea33f83-7841-4676-bd49-c8e4bf4e62a6',
    description: 'Product ID',
    required: false,
  })
  @ValidateIf((o) => o.promotionType == PromotionType.Product)
  @IsString()
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @MaxLength(100)
  productId: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  startDate: string | null;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  endDate: string | null;
}
