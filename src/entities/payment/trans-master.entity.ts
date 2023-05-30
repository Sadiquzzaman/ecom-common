import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { InvoiceEntity } from './invoice/invoice.entity';
import { UserEntity } from '../user/user.entity';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';
import { Bool } from '../../enum/bool.enum';
import { OnlinePaymentActivityLogEntity } from './ssl/online-payment-activity-log.entity';
import { PromotionInvoiceEntity } from './invoice/promotion-invoice.entity';

@Entity({ name: 'trans_master', schema: 'public' })
@Index('trans_master-total-amount-isactive-idx', ['totalAmount', 'isActive'])
@Index('trans-master-is_paid-isactive-idx', ['isPaid', 'isActive'])
export class TransMasterEntity extends CustomBaseEntity {
  @Column({
    type: 'decimal',
    name: 'total_amount',
    precision: 20,
    scale: 2,
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  @Index('trans_master-total-amount-idx')
  totalAmount: number;

  @Column({
    type: 'enum',
    name: 'is_paid',
    enum: Bool,
    default: `${Bool.No}`,
  })
  @Index('trans-master-credit-idx')
  isPaid: Bool;

  @OneToOne(() => InvoiceEntity)
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoiceEntity;

  @OneToOne(() => PromotionInvoiceEntity)
  @JoinColumn({ name: 'promotion_invoice_id' })
  promotionInvoice: PromotionInvoiceEntity;

  @OneToOne(() => OnlinePaymentActivityLogEntity)
  @JoinColumn({ name: 'online_payment_activity_log_id' })
  onlinePaymentActivityLog: OnlinePaymentActivityLogEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.transMasters)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
