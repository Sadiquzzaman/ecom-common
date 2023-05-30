import { BaseDto } from '../../core/base.dto';
import { AttributeDto } from './attribute.dto';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { Bool } from '../../../enum/bool.enum';
import { ApiProperty } from '@nestjs/swagger';

export class AttributeGroupDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Name must be defined!' })
  @IsString({ message: 'Name must be string!' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Position must be defined!' })
  @IsInt({ message: 'Must be an integer value' })
  position: number;

  @Type(() => AttributeDto)
  attributes: AttributeDto[];
}
