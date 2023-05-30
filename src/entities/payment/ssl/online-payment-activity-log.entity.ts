import { CustomBaseEntity } from '../../core/custom-base.entity';
import { Column, Entity, Index } from 'typeorm';
import { SslResponseStatusEnum } from '../../../enum/ssl-response-status.enum';

@Entity({ name: 'onaline_payment_activity_logs', schema: 'public' })
@Index('onaline_payment_activity_logs-tran-id-isactive-idx', ['tran_id', 'isActive'])
@Index('onaline_payment_activity_logs-amount-isactive-idx', ['amount', 'isActive'])
@Index('onaline_payment_activity_logs-store-amount-isactive-idx', ['store_amount', 'isActive'])
@Index('onaline_payment_activity_logs-card_issuer-isactive-idx', ['card_issuer', 'isActive'])
@Index('onaline_payment_activity_logs-card_brand-isactive-idx', ['card_brand', 'isActive'])
export class OnlinePaymentActivityLogEntity extends CustomBaseEntity {
  @Column({
    type: 'enum',
    name: 'status',
    enum: SslResponseStatusEnum,
  })
  status: string;

  @Column({
    type: 'timestamp without time zone',
    name: 'tran_date',
    default: new Date(),
    nullable: true,
  })
  tran_date: Date | null;

  @Column({ type: 'text', name: 'tran_id' })
  @Index('onaline_payment_activity_logs-tran-id-idx')
  tran_id: string;

  @Column({ type: 'text', name: 'val_id', nullable: true })
  val_id: string;

  @Column({
    type: 'text',
    name: 'amount',
    nullable: true,
  })
  @Index('onaline_payment_activity_logs-amount-idx')
  amount: string;

  @Column({
    type: 'text',
    name: 'store_amount',
    nullable: true,
  })
  @Index('onaline_payment_activity_logs-store-amount-idx')
  store_amount: string;

  @Column({ type: 'text', name: 'card_type', nullable: true })
  card_type: string;

  @Column({ type: 'text', name: 'card_no', nullable: true })
  card_no: string;

  @Column({ type: 'text', name: 'bank_tran_id', nullable: true })
  bank_tran_id: string;

  @Column({ type: 'text', name: 'card_issuer', nullable: true })
  @Index('onaline_payment_activity_logs-card_issuer-idx')
  card_issuer: string;

  @Column({ type: 'text', name: 'card_brand', nullable: true })
  @Index('onaline_payment_activity_logs-card_brand-idx')
  card_brand: string;

  @Column({ type: 'text', name: 'card_issuer_country', nullable: true })
  card_issuer_country: string;

  @Column({ type: 'text', name: 'card_issuer_country_code', nullable: true })
  card_issuer_country_code: string;

  @Column({ type: 'text', name: 'currency_type', nullable: true })
  currency_type: string;

  @Column({
    type: 'text',
    name: 'currency_amount',
    nullable: true,
  })
  currency_amount: string;

  @Column({ type: 'text', name: 'verify_sign', nullable: true })
  verify_sign: string;

  @Column({ type: 'text', name: 'verify_key', nullable: true })
  verify_key: string;

  @Column({
    type: 'text',
    name: 'risk_level',
    nullable: true,
  })
  risk_level: string;

  @Column({ type: 'text', name: 'risk_title', nullable: true })
  risk_title: string;

  @Column({ type: 'text', name: 'value_a', nullable: true })
  value_a: string;

  @Column({ type: 'text', name: 'value_b', nullable: true })
  value_b: string;

  @Column({ type: 'text', name: 'value_c', nullable: true })
  value_c: string;

  @Column({ type: 'text', name: 'value_d', nullable: true })
  value_d: string;

  @Column({ type: 'text', name: 'online_payment_activity_log', nullable: true })
  online_payment_activity_log: string;
}
