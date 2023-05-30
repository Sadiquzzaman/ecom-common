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
import { ShopDto } from './shop.dto';


export class ShopReviewDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(500, { message: 'Maximum 500 character supported' })
  shopReview: string;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 1 }, { message: 'Should be a number' })
  shopRating: number;

  @Type(() => ShopDto)
  shop: ShopDto;

  @Type(() => UserDto)
  user: UserDto;
}
