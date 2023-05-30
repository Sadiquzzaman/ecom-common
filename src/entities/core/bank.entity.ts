import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { BankDetailsEntity } from './bank-details.entity';
import { CustomBaseEntity } from './custom-base.entity';

@Entity({ name: 'banks', schema: 'public' })
// @Index('banks-name-active-idx', ['name', 'isActive'])
export class BankEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'bank_name', length: 100 })
  @Index('bank-name-idx', { unique: true })
  bankName: string;

  @OneToMany(
    () => BankDetailsEntity,
    (bankDetailsEntity) => bankDetailsEntity.banks,
  )
  @JoinColumn({ name: 'bank_id' })
  bankDetails: BankDetailsEntity[];
}
