import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDecimal,
  IsEnum, IsOptional,
  IsString,
  MaxLength,
  Min
} from 'class-validator';
import { InvoiceStatus } from '../../enum/invoice-status.enum';
import { MerchantWithdrawalStatus } from '../../enum/merchant-withdrawal.enum';
import { BaseDto } from '../core/base.dto';
import { BankDetailsDto } from '../core/bank-details.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { MerchantDto } from '../user/merchant.dto';
import { UserDto } from '../user/user.dto';

export class MerchantWithdrawalDto extends BaseDto {
  @ApiProperty()
  @IsDecimal()
  @Min(0)
  amount: number;

  @ApiProperty()
  @IsDecimal()
  paidAmount: number;

  @Type(() => UserDto)
  actionBy: UserDto;

  @ApiProperty()
  @IsDateString()
  actionAt: Date;

  @Type(() => MerchantDto)
  requestedBy: MerchantDto;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  attachedDocument: string;

  @ApiProperty()
  @IsEnum(MerchantWithdrawalStatus)
  withdrawalStatus: MerchantWithdrawalStatus;

  @Type(() => BankDetailsDto)
  bankDetails: MerchantDto;

  @ApiProperty()
  @IsString()
  @MaxLength(200)
  transactionId: string

  @ApiProperty()
  @IsString()
  @MaxLength(200)
  remarks: string

  @ApiProperty()
  @IsString()
  @MaxLength(200)
  rejectReson: string

  @ApiProperty()
  @IsEnum(InvoiceStatus)
  status: InvoiceStatus;
}

export class MerchantWithdrawalParamDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    description: 'merchant withdrawal status',
    required: false,
    default: MerchantWithdrawalStatus.PENDING,
    enum: ['0', '1', '2', '3'],
  })
  @IsEnum(MerchantWithdrawalStatus)
  withdrawalStatus: MerchantWithdrawalStatus;

  @ApiProperty({
    description: 'merchant withdrawal payment status',
    required: false,
    default: InvoiceStatus.UNPAID,
    enum: ['paid', 'unpaid'],
  })
  @IsEnum(InvoiceStatus)
  paymentStatus: InvoiceStatus;

  @ApiProperty({
    description: 'merchant id',
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  merchantID: String;

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
