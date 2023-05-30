import { ProductDto } from '../product.dto';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Bool } from '../../../enum/bool.enum';

export class CreateProductDto extends ProductDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'User ID must be defined' })
  @IsUUID('all', { message: 'User ID must be an UUID' })
  userID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Shop ID must be defined' })
  @IsUUID('all', { message: 'Shop ID must be an UUID' })
  shopID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Category ID must be defined' })
  @IsUUID('all', { message: 'Category ID must be an UUID' })
  categoryID: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID('all', { message: 'Brand ID must be an UUID' })
  brandID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'HasProductAttribute must be defined' })
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Must be either 0 or 1' })
  hasProductAttribute: Bool;
}
