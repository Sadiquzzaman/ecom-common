import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  Allow,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
  ValidateIf,
} from 'class-validator';
import { Bool } from '../../enum/bool.enum';
import { BaseDto } from './base.dto';
import { CurrencyDto } from './currency.dto';
import { StateDto } from './state.dto';
import { Point } from '../location/point';

export class CountryDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(3, { message: 'Maximum 3 character supported' })
  isoCode: string;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @Min(0)
  callPrefix: number;

  @ApiProperty()
  @Allow()
  @Type(() => Point)
  location: Point;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Can be either 0 or 1' })
  hasStates: Bool;

  @ApiProperty()
  @ValidateIf((o) => o.hasStates === Bool.Yes)
  @IsString({ message: 'Must be a string' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  stateAlies: string;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Can be either 0 or 1' })
  hasZipCode: Bool;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(12, { message: 'Maximum 12 character supported' })
  zipCodeFormat: string;

  @Type(() => CurrencyDto)
  currency: CurrencyDto;

  @Type(() => StateDto)
  states: StateDto[];
}
