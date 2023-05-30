import { AddressEntity } from './address.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Bool } from '../../enum/bool.enum';
import { CurrencyEntity } from './currency.entity';
import { CustomBaseEntity } from './custom-base.entity';
import { StateEntity } from './state.entity';
import { PointToStringTransformer } from '../../transformers/point-to-string.transformer';
import { Point } from '../../dto/location/point';

@Entity({ name: 'countries', schema: 'public' })
@Index('countries-name-isactive-idx', ['name', 'isActive'])
@Index('countries-iso-code-isactive-idx', ['isoCode', 'isActive'])
export class CountryEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 100 })
  @Index('countries-name-idx', { unique: true })
  name: string;

  @Column({ type: 'varchar', name: 'iso_code', length: 3 })
  @Index('countries-iso-code-idx', { unique: true })
  isoCode: string;

  @Column({ type: 'int', name: 'call_prefix', default: () => "'0'" })
  callPrefix: number;

  @Column({
    type: 'point',
    name: 'location',
    transformer: new PointToStringTransformer(),
  })
  location: Point;

  @Column({
    type: 'enum',
    name: 'has_states',
    enum: Bool,
    default: `${Bool.Yes}`,
  })
  hasStates: Bool;

  @Column({ type: 'varchar', name: 'state_alies', length: 50, nullable: true })
  stateAlies: string;

  @Column({
    type: 'enum',
    name: 'has_zip_code',
    enum: Bool,
    default: `${Bool.Yes}`,
  })
  hasZipCode: Bool;

  @Column({
    type: 'varchar',
    name: 'zip_code_format',
    length: 12,
    nullable: true,
  })
  zipCodeFormat: string;

  @OneToOne(() => CurrencyEntity)
  @JoinColumn({ name: 'currency_id' })
  currency: CurrencyEntity;

  @OneToMany(() => StateEntity, (stateEntity) => stateEntity.country)
  @JoinColumn({ name: 'country_id' })
  states: StateEntity[];

  @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.country)
  @JoinColumn({ name: 'country_id' })
  addresses: AddressEntity[];
}
