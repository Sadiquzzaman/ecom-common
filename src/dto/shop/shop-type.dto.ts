import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsOptional,
  Min,
  Max,
  IsNumber,
} from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { Type } from 'class-transformer';
import { ShopDto } from './shop.dto';
import { PromotionDto } from './promotion.dto';

export class ShopTypeDto extends BaseDto {
  @ApiProperty({ default: 'Grocery', required: true })
  @IsNotEmpty()
  @IsString({ message: 'Shop Type name must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  name: string;

  @ApiProperty({
    default: '/assets/images/image-default/category/Grocery.jpg',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Shop Type image must be a string!' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  image: string;

  @ApiProperty({
    default: 'Description of Grocery store',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  description: string;

  @ApiProperty({ default: Number(0.0), required: true })
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  commission: number;

  @Type(() => ShopDto)
  shops: ShopDto[];

  @Type(() => PromotionDto)
  promotions: PromotionDto[];
}
