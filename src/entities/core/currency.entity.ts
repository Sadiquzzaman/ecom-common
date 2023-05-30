import { Column, Entity, Index } from 'typeorm';
import { CustomBaseEntity } from './custom-base.entity';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';

@Entity({ name: 'currencies', schema: 'public' })
@Index('currencies-name-isactive-idx', ['name', 'isActive'])
@Index('currencies-iso-code-isactive-idx', ['isoCode', 'isActive'])
export class CurrencyEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 60 })
  @Index('currencies-name-idx', { unique: false })
  name: string;

  @Column({ type: 'varchar', name: 'iso_code', length: 3 })
  @Index('currencies-iso-code-idx', { unique: false })
  isoCode: string;

  @Column({
    type: 'varchar',
    name: 'numeric_iso_code',
    length: 3,
    nullable: true,
  })
  numericIsoCode: string;

  @Column({ type: 'varchar', name: 'symbol', length: 5, nullable: true })
  symbol: string;

  @Column({
    type: 'decimal',
    name: 'conversion_rate',
    precision: 13,
    scale: 6,
    nullable: true,
    transformer: new StringToNumericTransformer(),
  })
  conversionRate: number;
}
