import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { InvoiceStatus } from '../../enum/invoice-status.enum';
import { MerchantWithdrawalStatus } from '../../enum/merchant-withdrawal.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { BankDetailsEntity } from '../core/bank-details.entity';
import { MerchantEntity } from '../user/merchant.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'merchant_withdrawl', schema: 'public' })
export class MerchantWithdrawalEntity extends CustomBaseEntity {
  @Column({ name: 'amount', type: 'decimal', nullable: false, default: 0 })
  amount: Number;

  @Column({
    name: 'paid_amount',
    type: 'decimal',
    nullable: true,
    default: 0,
  })
  paidAmount: Number;

  @ManyToOne(() => MerchantEntity)
  @JoinColumn({ name: 'requested_by' })
  requestedBy: MerchantEntity;

  @ManyToOne(() => BankDetailsEntity)
  @JoinColumn({name: 'bank_details_id'})
  bankDetails: BankDetailsEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'action_by' })
  actionBy: UserEntity;

  @Column({ name: 'action_at', type: 'date', nullable: true })
  actionAt: Date;

  @Column({
    type: 'varchar',
    name: 'attached_document_image',
    length: 200,
    nullable: true,
  })
  attachedDocument: string;

  @Column({
    type: 'enum',
    name: 'withdrawal_status',
    enum: MerchantWithdrawalStatus,
    default: `${MerchantWithdrawalStatus.PENDING}`,
  })
  withdrawalStatus: MerchantWithdrawalStatus;

  @Column({ type: 'varchar', name: 'reject_reason', nullable: true })
  rejectReason: string;

  // @Column({ type: 'varchar', name: 'bank_name', nullable: true })
  // bankName: string;

  // @Column({ type: 'varchar', name: 'account_holder', nullable: true })
  // accountHolderName: string;

  // @Column({ type: 'varchar', name: 'account_number', nullable: true })
  // accountNumber: string;

  @Column({ type: 'varchar', name: 'transaction_id', nullable: true })
  transactionId: string;

  @Column({ type: 'varchar', name: 'remarks', nullable: true })
  remarks: string;

  @Column({
    type: 'enum',
    name: 'payment_status',
    enum: InvoiceStatus,
    default: `${InvoiceStatus.UNPAID}`,
  })
  paymentStatus: InvoiceStatus;
}
