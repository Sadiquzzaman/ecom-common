import { BankDto } from './bank.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ProductDto } from '../product/product.dto';
import { MerchantDto } from '../user/merchant.dto';
import { BaseDto } from './base.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';

export class BankDetailsDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(65, { message: 'Maximum 65 characters supported' })
  accountHolderName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(50, { message: 'Maximum 50 characters supported' })
  accountNumber: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(400, { message: 'Maximum 400 characters supported' })
  remarks: string;

  @Type(() => MerchantDto)
  merchant: MerchantDto;

  @Type(() => BankDto)
  banks: BankDto;
}

export class BankDetailsSearchDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  accountNumber: string;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  accountHolderName: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  merchantId: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  bankId: string;
}
