import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ProductDto } from '../product/product.dto';
import { BaseDto } from './base.dto';

export class BrandDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  name: string;

  @Type(() => ProductDto)
  products: ProductDto[];
}
