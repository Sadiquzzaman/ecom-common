import { BaseDto } from '../../core/base.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class OnlinePaymentActivityLogDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  tran_date: Date | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  tran_id: string;

  @ApiProperty()
  @IsString()
  val_id: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: string;

  @ApiProperty()
  @IsNumber()
  store_amount: string;

  @ApiProperty()
  @IsString()
  card_type: string;

  @ApiProperty()
  @IsString()
  card_no: string;

  @ApiProperty()
  @IsString()
  bank_tran_id: string;

  @ApiProperty()
  @IsString()
  card_issuer: string;

  @ApiProperty()
  @IsString()
  card_brand: string;

  @ApiProperty()
  @IsString()
  card_issuer_country: string;

  @ApiProperty()
  @IsString()
  card_issuer_country_code: string;

  @ApiProperty()
  @IsString()
  currency_type: string;

  @ApiProperty()
  @IsNumber()
  currency_amount: string;

  @ApiProperty()
  @IsString()
  verify_sign: string;

  @ApiProperty()
  @IsString()
  verify_key: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(1)
  risk_level: string;

  @ApiProperty()
  @IsString()
  risk_title: string;

  @ApiProperty()
  @IsString()
  value_a: string;

  @ApiProperty()
  @IsString()
  value_b: string;

  @ApiProperty()
  @IsString()
  value_c: string;

  @ApiProperty()
  @IsString()
  value_d: string;

  @ApiProperty()
  @IsString()
  online_payment_activity_log: string;

}
