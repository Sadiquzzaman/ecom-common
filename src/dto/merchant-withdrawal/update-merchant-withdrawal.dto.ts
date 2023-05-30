import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseDto } from '../dto.config';

export class UpdateMerchantWithdrawalDto extends BaseDto {

  @ApiProperty()
  @Transform((property) => parseInt(property.value))
  @IsInt()
  withdrawalStatus: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  paidAmount: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  attachedDocument: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  transactionId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  rejectReason: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  remarks: string;
}
