import { AttributeValueDto } from './attribute-value.dto';
import { BaseDto } from '../../core/base.dto';
import { AttributeGroupDto } from './attribute-group.dto';
import { ProductAttributeDto } from '../product-attribute.dto';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AttributeDto extends BaseDto {
  // @ApiProperty()
  // @IsString({ message: 'Must be a string' })
  // @MaxLength(30, { message: 'Maximum 30 character supported' })
  // color: string;

  // @ApiProperty()
  // @IsNotEmpty({ message: 'Position must be defined!' })
  // @IsInt({ message: 'Must be an integer value' })
  // position: number;

  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      {
        name: 'hi-all',
        description: 'asd as dasd asdasd asdia sdoias diashd jiahs d',
      },
    ],
    type: [AttributeValueDto],
  })
  @IsNotEmpty()
  @IsArray()
  attributeValue: AttributeValueDto[];

  @Type(() => AttributeGroupDto)
  attributeGroup: AttributeGroupDto;

  @Type(() => ProductAttributeDto)
  productAttributes: ProductAttributeDto[];
}
