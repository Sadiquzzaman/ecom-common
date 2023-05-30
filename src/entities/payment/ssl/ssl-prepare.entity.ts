import { CustomBaseEntity } from '../../core/custom-base.entity';
import { Bool } from '../../../enum/bool.enum';
import { SslShippingMethodEnum } from '../../../enum/ssl-shipping-method.enum';
import { SslProductProfileEnum } from '../../../enum/ssl-product-profile.enum';
import { StringToNumericTransformer } from '../../../transformers/string-to-numeric.transformer';
import { Column, Entity, Index } from 'typeorm';
import { SslPrepareProductDto } from '../../../dto/payment/ssl/ssl-prepare-product.dto';

@Entity({ name: 'ssl_prepare', schema: 'public' })
@Index('ssl_prepare-cus_name-isactive-idx', ['cus_name', 'isActive'])
@Index('ssl_prepare-cus_email-isactive-idx', ['cus_email', 'isActive'])
@Index('ssl_prepare-cus_phone-isactive-idx', ['cus_phone', 'isActive'])
@Index('ssl_prepare-cus_total_amount-isactive-idx', [
  'total_amount',
  'isActive',
])
export class SslPrepareEntity extends CustomBaseEntity {
  // basic setting
  @Column({ type: 'text', name: 'tran_id', nullable: true })
  tran_id: string;

  // url options
  @Column({ type: 'text', name: 'success_url', nullable: true })
  success_url: string;

  @Column({ type: 'text', name: 'fail_url', nullable: true })
  fail_url: string;

  @Column({ type: 'text', name: 'cancel_url', nullable: true })
  cancel_url: string;

  @Column({ type: 'text', name: 'ipn_url', nullable: true })
  ipn_url: string;

  @Column({
    type: 'varchar',
    name: 'multi_card_name',
    length: 30,
    nullable: true,
  })
  multi_card_name: string;

  @Column({ type: 'text', name: 'allowed_bin', nullable: true })
  allowed_bin: string | number;

  // amount
  @Column({
    type: 'decimal',
    name: 'total_amount',
    precision: 10,
    scale: 2,
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  @Index('ssl_prepare-total_amount-idx')
  total_amount: number;

  // emi options
  @Column({
    type: 'enum',
    name: 'emi_option',
    enum: Bool,
    default: `${Bool.No}`,
    nullable: true,
  })
  emi_option: Bool;

  @Column({
    type: 'int',
    name: 'emi_max_inst_option',
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  emi_max_inst_option: number;

  @Column({
    type: 'int',
    name: 'emi_selected_inst',
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  emi_selected_inst: number;

  @Column({
    type: 'enum',
    name: 'emi_allow_only',
    enum: Bool,
    default: `${Bool.No}`,
    nullable: true,
  })
  emi_allow_only: Bool;

  // customer info
  @Column({ type: 'text', name: 'cus_name' })
  @Index('ssl_prepare-cus_name-idx')
  cus_name: string;

  @Column({ type: 'text', name: 'cus_email' })
  @Index('ssl_prepare-cus_email-idx')
  cus_email: string;

  @Column({ type: 'text', name: 'cus_add1' })
  cus_add1: string;

  @Column({ type: 'text', name: 'cus_add2', nullable: true })
  cus_add2: string;

  @Column({ type: 'text', name: 'cus_city' })
  cus_city: string;

  @Column({ type: 'text', name: 'cus_state', nullable: true })
  cus_state: string;

  @Column({ type: 'text', name: 'cus_postcode' })
  cus_postcode: string;

  @Column({ type: 'text', name: 'cus_country' })
  cus_country: string;

  @Column({ type: 'text', name: 'cus_phone' })
  @Index('ssl_prepare-cus_phone-idx')
  cus_phone: string;

  @Column({ type: 'text', name: 'cus_fax', nullable: true })
  cus_fax: string;

  // shipment info
  @Column({
    type: 'enum',
    name: 'shipping_method',
    enum: SslShippingMethodEnum,
    nullable: true,
  })
  shipping_method: SslShippingMethodEnum;

  @Column({
    type: 'int',
    name: 'num_of_item',
    transformer: new StringToNumericTransformer(),
  })
  num_of_item: number;

  @Column({ type: 'text', name: 'ship_name', nullable: true })
  ship_name: string;

  @Column({ type: 'text', name: 'ship_add1', nullable: true })
  ship_add1: string;

  @Column({ type: 'text', name: 'ship_add2', nullable: true })
  ship_add2: string;

  @Column({ type: 'text', name: 'ship_city', nullable: true })
  ship_city: string;

  @Column({ type: 'text', name: 'ship_state', nullable: true })
  ship_state: string;

  @Column({
    type: 'text',
    name: 'ship_postcode',
    nullable: true,
  })
  ship_postcode: string;

  @Column({ type: 'text', name: 'ship_country', nullable: true })
  ship_country: string;

  // products info
  @Column({ type: 'text', name: 'product_name' })
  product_name: string;

  @Column({ type: 'text', name: 'product_category' })
  product_category: string;

  @Column({
    type: 'enum',
    name: 'product_profile',
    enum: SslProductProfileEnum,
    nullable: true,
  })
  product_profile: SslProductProfileEnum;

  // AIRLINE_TICKETS
  @Column({
    type: 'text',
    name: 'hours_till_departure',
    nullable: true,
  })
  hours_till_departure: string;

  @Column({ type: 'text', name: 'flight_type', nullable: true })
  flight_type: string;

  @Column({ type: 'text', name: 'pnr', nullable: true })
  pnr: string;

  @Column({
    type: 'text',
    name: 'journey_from_to',
    nullable: true,
  })
  journey_from_to: string;

  @Column({
    type: 'text',
    name: 'third_party_booking',
    nullable: true,
  })
  third_party_booking: Bool;

  // TRAVEL_VERTICAL
  @Column({ type: 'text', name: 'hotel_name', nullable: true })
  hotel_name: string;

  @Column({
    type: 'text',
    name: 'length_of_stay',
    nullable: true,
  })
  length_of_stay: string;

  @Column({
    type: 'text',
    name: 'check_in_time',
    nullable: true,
  })
  check_in_time: string;

  @Column({ type: 'text', name: 'hotel_city', nullable: true })
  hotel_city: string;

  // TELECOM_VERTICAL
  @Column({ type: 'text', name: 'product_type', nullable: true })
  product_type: string;

  @Column({
    type: 'text',
    name: 'topup_number',
    nullable: true,
  })
  topup_number: string;

  @Column({
    type: 'text',
    name: 'country_topup',
    nullable: true,
  })
  country_topup: string;

  @Column('jsonb', { nullable: true })
  cart?: SslPrepareProductDto[];

  @Column({
    type: 'decimal',
    name: 'product_amount',
    precision: 10,
    scale: 2,
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  product_amount: number;

  @Column({
    type: 'decimal',
    name: 'vat',
    precision: 10,
    scale: 2,
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  vat: number;

  @Column({
    type: 'decimal',
    name: 'discount_amount',
    precision: 10,
    scale: 2,
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  discount_amount: number;

  @Column({
    type: 'decimal',
    name: 'convenience_fee',
    precision: 10,
    scale: 2,
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  convenience_fee: number;

  // optional parameter
  @Column({ type: 'text', name: 'value_a', nullable: true })
  value_a: string;

  @Column({ type: 'text', name: 'value_b', nullable: true })
  value_b: string;

  @Column({ type: 'text', name: 'value_c', nullable: true })
  value_c: string;

  @Column({ type: 'text', name: 'value_d', nullable: true })
  value_d: string;
}
