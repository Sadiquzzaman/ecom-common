import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { MerchantEntity } from '../user/merchant.entity';
import { BankEntity } from './bank.entity';
import { CustomBaseEntity } from './custom-base.entity';

@Entity({ name: 'bank_details', schema: 'public' })
export class BankDetailsEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'account_holder_name', length: 65 })
  accountHolderName: string;

  @Column({ type: 'varchar', name: 'account_number', length: 50 })
  @Index({ unique: true })
  accountNumber: string;

  @Column({ type: 'varchar', name: 'remarks', length: 400 })
  remarks: string;

  @ManyToOne(
    () => MerchantEntity,
    (merchantEntity) => merchantEntity.merchantBankDetails,
  )
  merchant: MerchantEntity;

  @ManyToOne(() => BankEntity, (bankEntity) => bankEntity.bankDetails)
  @JoinColumn({ name: 'bank_id' })
  banks: BankEntity;
}
