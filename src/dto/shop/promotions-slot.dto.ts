import { ApiProperty } from '@nestjs/swagger';
import { Type, Transform } from 'class-transformer';
import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { PromotionType } from '../../enum/promotion-type.enum';
import { BaseDto } from '../core/base.dto';
import { PromotionDto } from './promotion.dto';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';

export class PromotionSlotDto extends BaseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Transform((property) => parseInt(property.value))
  dailyCharge: number;

  @ApiProperty()
  @IsEnum(PromotionType, { message: 'Must be a valid status [1-3]' })
  promotionType: PromotionType;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Transform((property) => parseInt(property.value))
  limit: number;

  @Type(() => PromotionDto)
  promotion: PromotionDto;
}
