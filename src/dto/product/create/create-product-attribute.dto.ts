import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProductAttributeDto } from '../product-attribute.dto';
import { AttributeIdDto } from './attribute-id.dto';
import { Type } from "class-transformer";

export class CreateProductAttributeDto extends ProductAttributeDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @IsUUID('all', { message: 'Product ID must be an UUID' })
  productID: string;

  @ApiProperty({ type: AttributeIdDto, isArray: true })
  @ValidateNested()
  @Type(() => AttributeIdDto)
  attributesID: AttributeIdDto[];
}
