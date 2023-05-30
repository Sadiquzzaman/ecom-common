import {
  Allow,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../core/base.dto';
import { Bool } from '../../../enum/bool.enum';
import { SslShippingMethodEnum } from '../../../enum/ssl-shipping-method.enum';
import { SslProductProfileEnum } from '../../../enum/ssl-product-profile.enum';
import { Type } from 'class-transformer';
import { SslPrepareProductDto } from './ssl-prepare-product.dto';

export class SslPrepareDto extends BaseDto {
  // basic setting
  @Allow()
  @IsOptional()
  @IsString()
  tran_id: string;

  // url options
  @ApiProperty()
  @IsOptional()
  @IsString()
  success_url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fail_url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cancel_url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  ipn_url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  multi_card_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  allowed_bin: string;

  // amount
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  total_amount: number;

  // emi options
  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Can be either 0 or 1' })
  emi_option: Bool;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Must be an integer value' })
  @MinLength(1)
  @MaxLength(2)
  emi_max_inst_option: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Must be an integer value' })
  emi_selected_inst: number;

  @ApiProperty()
  @IsOptional()
  @ValidateIf((o) => o.emi_option && o.emi_selected_inst)
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Can be either 0 or 1' })
  emi_allow_only: Bool;

  // customer info
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cus_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cus_email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cus_add1: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cus_add2: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cus_city: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cus_state: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cus_postcode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cus_country: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cus_phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cus_fax: string;

  // shipment info
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(SslShippingMethodEnum, {
    message: 'Must be valid shipping method!',
  })
  shipping_method: SslShippingMethodEnum;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  num_of_item: number;

  @ApiProperty()
  @ValidateIf((o) => o.shippingMethod === SslShippingMethodEnum.YES)
  @IsString()
  ship_name: SslShippingMethodEnum;

  @ApiProperty()
  @ValidateIf((o) => o.shippingMethod === SslShippingMethodEnum.YES)
  @IsString()
  ship_add1: string;

  @ApiProperty()
  @IsOptional()
  @ValidateIf((o) => o.shippingMethod === SslShippingMethodEnum.YES)
  @IsString()
  ship_add2: string;

  @ApiProperty()
  @IsOptional()
  @ValidateIf((o) => o.shippingMethod === SslShippingMethodEnum.YES)
  @IsString()
  ship_city: string;

  @ApiProperty()
  @IsOptional()
  @ValidateIf((o) => o.shippingMethod === SslShippingMethodEnum.YES)
  @IsString()
  ship_state: string;

  @ApiProperty()
  @IsOptional()
  @ValidateIf((o) => o.shippingMethod === SslShippingMethodEnum.YES)
  @IsString()
  ship_postcode: string;

  @ApiProperty()
  @IsOptional()
  @ValidateIf((o) => o.shippingMethod === SslShippingMethodEnum.YES)
  @MaxLength(50, { message: 'Maximum 50 character!' })
  ship_country: string;

  // products info
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  product_category: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(SslProductProfileEnum, {
    message: 'Must be valid payment profile!',
  })
  product_profile: SslProductProfileEnum;

  // AIRLINE_TICKETS
  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.AIRLINE_TICKETS)
  @IsString()
  hours_till_departure: string;

  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.AIRLINE_TICKETS)
  @IsString()
  flight_type: string;

  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.AIRLINE_TICKETS)
  @IsString()
  pnr: string;

  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.AIRLINE_TICKETS)
  @IsString()
  journey_from_to: string;

  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.AIRLINE_TICKETS)
  @IsEnum(Bool, { message: 'Must be 1 or 0!' })
  third_party_booking: Bool;

  // TRAVEL_VERTICAL
  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.TRAVEL_VERTICAL)
  @IsString()
  hotel_name: string;

  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.TRAVEL_VERTICAL)
  @IsString()
  length_of_stay: string;

  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.TRAVEL_VERTICAL)
  @IsString()
  check_in_time: string;

  @ApiProperty()
  @ValidateIf((o) => o.productProfile === SslProductProfileEnum.TRAVEL_VERTICAL)
  @IsString()
  hotel_city: string;

  // TELECOM_VERTICAL
  @ApiProperty()
  @ValidateIf(
    (o) => o.productProfile === SslProductProfileEnum.TELECOM_VERTICAL,
  )
  @IsString()
  product_type: string;

  @ApiProperty()
  @ValidateIf(
    (o) => o.productProfile === SslProductProfileEnum.TELECOM_VERTICAL,
  )
  @IsString()
  topup_number: string;

  @ApiProperty()
  @ValidateIf(
    (o) => o.productProfile === SslProductProfileEnum.TELECOM_VERTICAL,
  )
  @IsString()
  country_topup: string;

  @ApiProperty({ type: SslPrepareProductDto, isArray: true })
  @ValidateNested({ each: true })
  @Type(() => SslPrepareProductDto)
  cart: SslPrepareProductDto[];

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  product_amount: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  vat: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  discount_amount: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  convenience_fee: number;

  // optional parameter
  @ApiProperty()
  @IsOptional()
  value_a: string;

  @ApiProperty()
  @IsOptional()
  value_b: string;

  @ApiProperty()
  @IsOptional()
  value_c: string;

  @ApiProperty()
  @IsOptional()
  value_d: string;
}
