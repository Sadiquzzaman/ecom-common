import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'affiliators', schema: 'public' })
export class AffiliatorEntity extends CustomBaseEntity {
  @Column({
    type: 'decimal',
    name: 'base_fee',
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
    transformer: new StringToNumericTransformer(),
  })
  baseFee: number;

  @Column({
    type: 'decimal',
    name: 'percent_fee',
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
    transformer: new StringToNumericTransformer(),
  })
  percentFee: number;

  @Column({
    type: 'decimal',
    name: 'click_fee',
    precision: 5,
    scale: 2,
    default: () => "'0.00'",
    transformer: new StringToNumericTransformer(),
  })
  clickFee: number;

  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.affiliator)
  @JoinColumn({ name: 'affiliator_id' })
  notes: NoteEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;

  @OneToOne(() => UserEntity, (userEntity) => userEntity.affiliator)
  user: UserEntity;
}
