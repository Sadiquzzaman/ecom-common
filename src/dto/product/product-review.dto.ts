import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength
} from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { UserDto } from '../user/user.dto';
import { ProductDto } from './product.dto';


export class ProductReviewDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(500, { message: 'Maximum 500 character supported' })
  productReview: string;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 1 }, { message: 'Should be a number' })
  productRating: number;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => UserDto)
  user: UserDto;
}
