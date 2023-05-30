import { UserEntity } from '../user/user.entity';
import { CustomBaseEntity } from '../../entities/core/custom-base.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CouponEntity } from './coupon.entity';

@Entity({ name: 'coupon_usages', schema: 'public' })
export class CouponUsageEntity extends CustomBaseEntity {
  @ManyToOne(() => UserEntity, (userEntity) => userEntity.couponUsages)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => CouponEntity, (couponEntity) => couponEntity.couponUsages)
  @JoinColumn({ name: 'coupon_id' })
  coupon: CouponEntity;

}
