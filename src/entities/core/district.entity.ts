import { AddressEntity } from './address.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CustomBaseEntity } from './custom-base.entity';
import { ThanaEntity } from './thana.entity';
import { StateEntity } from './state.entity';
import { PointToStringTransformer } from '../../transformers/point-to-string.transformer';
import { Point } from '../../dto/location/point';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';

@Entity({ name: 'districts', schema: 'public' })
@Index('districts-name-isactive-idx', ['name', 'isActive'])
@Index('districts-iso-code-isactive-idx', ['isoCode', 'isActive'])
export class DistrictEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'iso_code', length: 7, nullable: true })
  @Index('districts-iso-code-idx', { unique: true })
  isoCode: string;

  @Column({ type: 'varchar', name: 'name', length: 64 })
  @Index('districts-name-code-idx', { unique: true })
  name: string;

  @Column({
    type: 'point',
    name: 'location',
    transformer: new PointToStringTransformer(),
  })
  location: Point;

  @ManyToOne(() => StateEntity, (stateEntity) => stateEntity.districts)
  @JoinColumn({ name: 'state_id' })
  state: StateEntity;

  @OneToMany(() => ThanaEntity, (thanaEntity) => thanaEntity.district)
  @JoinColumn({ name: 'district_id' })
  thanas: ThanaEntity[];

  @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.district)
  @JoinColumn({ name: 'district_id' })
  addresses: AddressEntity[];

  @Column({
    type: 'decimal',
    name: 'shipping_cost',
    precision: 20,
    scale: 6,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  shippingCost: number;
}
