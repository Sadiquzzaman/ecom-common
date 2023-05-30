import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';
import { Bool } from '../../enum/bool.enum';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { BaseDto } from './base.dto';

export class ContactUsDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsEmail()
  @MaxLength(100, { message: 'Maximum 100 characters supported' })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  subject: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  message: string;

  @ApiProperty()
  @ValidateIf((o) => o.isSms === Bool.Yes)
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(30, { message: 'Maximum 30 character supported' })
  phone: string;
}

export class ContactUsPaginationSearchDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  phone: String;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  email: String;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  fromDate: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  toDate: string;
}
