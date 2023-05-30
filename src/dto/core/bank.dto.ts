import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ProductDto } from '../product/product.dto';
import { BankDetailsDto } from './bank-details.dto';
import { BaseDto } from './base.dto';

export class BankDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  bankName: string;

  @Type(() => BankDetailsDto)
  bankDetails: BankDetailsDto[];
}
