import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { ProductReviewDto } from '../product-review.dto';

export class CreateProductReviewDto extends ProductReviewDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @IsUUID('all', { message: 'Product ID must be an UUID' })
  productID: string;
}
