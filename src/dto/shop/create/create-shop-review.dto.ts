import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { ShopReviewDto } from './../shop-review.dto';

export class CreateShopReviewDto extends ShopReviewDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Shop ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid shop ID' })
  shopID: string;

}
