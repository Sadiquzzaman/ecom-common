import { AddressEntity } from './address.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn, ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CustomBaseEntity } from './custom-base.entity';
import { DistrictEntity } from './district.entity';
import { ResidentialAreaEntity } from './residential-area.entity';
import { PointToStringTransformer } from '../../transformers/point-to-string.transformer';
import { Point } from '../../dto/location/point';
import { CouponEntity } from '../coupon/coupon.entity';

@Entity({ name: 'thanas', schema: 'public' })
@Index('thanas-name-isactive-idx', ['name', 'isActive'])
export class ThanaEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'iso_code', length: 7, nullable: true })
  isoCode: string;

  @Column({ type: 'varchar', name: 'name', length: 64 })
  @Index('thanas-name-idx', { unique: false })
  name: string;

  @Column({
    type: 'point',
    name: 'location',
    transformer: new PointToStringTransformer(),
    nullable: true,
  })
  location: Point;

  @ManyToOne(() => DistrictEntity, (districtEntity) => districtEntity.thanas)
  @JoinColumn({ name: 'district_id' })
  district: DistrictEntity;

  @OneToMany(
    () => ResidentialAreaEntity,
    (residentialAreaEntity) => residentialAreaEntity.thana,
  )
  @JoinColumn({ name: 'thana_id' })
  residentialAreas: ResidentialAreaEntity[];

  @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.thana)
  @JoinColumn({ name: 'thana_id' })
  addresses: AddressEntity[];

  @ManyToMany(
      () => CouponEntity,
      (couponEntity) => couponEntity.thanas,
  )
  coupons: CouponEntity[];
}
