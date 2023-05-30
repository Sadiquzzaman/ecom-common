import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { BaseDto } from '../core/base.dto';

export class ShipmentValueDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt({ message: 'Quantity should be an integer!' })
  @Min(0)
  value: number;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsInt({ message: 'Quantity should be an integer!' })
  // @Min(0)
  // lowerValue: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  description: string;
}
