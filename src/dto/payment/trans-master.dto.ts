import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { Bool } from '../../enum/bool.enum';
import { InvoiceDto } from './invoice/invoice.dto';
import { OnlinePaymentActivityLogDto } from './ssl/online-payment-activity-log.dto';
import { UserDto } from '../user/user.dto';
import { PromotionInvoiceDto } from './invoice/promotion-invoice.dto';

export class TransMasterDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Should be a number (max 2 decimal place)!' },
  )
  totalAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Can be either 0 or 1' })
  isPaid: Bool;

  @IsOptional()
  @Type(() => InvoiceDto)
  invoice: InvoiceDto;

  @IsOptional()
  @Type(() => PromotionInvoiceDto)
  promotionInvoice: PromotionInvoiceDto;

  @Type(() => OnlinePaymentActivityLogDto)
  onlinePaymentActivityLog: OnlinePaymentActivityLogDto;

  @Type(() => UserDto)
  user: UserDto;
}
