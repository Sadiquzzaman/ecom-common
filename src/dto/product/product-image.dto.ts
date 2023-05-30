import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class ProductImageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string!' })
  cover: string;

  @ApiProperty({
    type: String,
    isArray: true,
    default: [],
  })
  @ValidateNested({ each: true })
  @IsString({ message: 'Must be a string!' })
  gallery: string[];
}
