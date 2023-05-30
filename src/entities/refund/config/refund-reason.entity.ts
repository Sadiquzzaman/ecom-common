import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../core/custom-base.entity';

@Entity({ name: 'refund_reasons', schema: 'public' })
@Index('refund_reasons-active-idx', ['name', 'isActive'])
export class RefundReasonEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 50 })
  @Index('refund_reason-name-idx', { unique: true })
  name: string;

  @Column({ type: 'varchar', name: 'description', length: 255 })
  description: string;
}
