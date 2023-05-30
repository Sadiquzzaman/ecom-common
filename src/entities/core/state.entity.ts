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
import { DistrictEntity } from './district.entity';
import { CountryEntity } from './country.entity';
import { PointToStringTransformer } from '../../transformers/point-to-string.transformer';
import { Point } from '../../dto/location/point';

@Entity({ name: 'states', schema: 'public' })
@Index('states-iso-code-isactive-idx', ['isoCode', 'isActive'])
@Index('states-name-isactive-idx', ['name', 'isActive'])
export class StateEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'iso_code', length: 7, nullable: true })
  @Index('states-iso-code-idx', { unique: true })
  isoCode: string;

  @Column({ type: 'varchar', name: 'name', length: 64 })
  @Index('states-name-idx', { unique: true })
  name: string;

  @Column({
    type: 'point',
    name: 'location',
    transformer: new PointToStringTransformer(),
  })
  location: Point;

  @ManyToOne(() => CountryEntity, (countryEntity) => countryEntity.states)
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @OneToMany(() => DistrictEntity, (districtEntity) => districtEntity.state)
  @JoinColumn({ name: 'state_id' })
  districts: DistrictEntity[];

  @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.state)
  @JoinColumn({ name: 'state_id' })
  addresses: AddressEntity[];
}
