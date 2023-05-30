import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { CouponEntity } from '../coupon/coupon.entity';
import { OrderEntity } from '../order/order.entity';
import { UserEntity } from '../user/user.entity';
import { CartDetailsEntity } from './cart-details.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CustomerEntity } from '../user/customer.entity';

@Entity({ name: 'carts', schema: 'public' })
export class CartEntity extends CustomBaseEntity {
  @OneToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.carts)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => CustomerEntity, (customerEntity) => customerEntity.carts)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToMany(
    () => CartDetailsEntity,
    (cartDetailsEntity) => cartDetailsEntity.cart,
  )
  @JoinColumn({ name: 'cart_id' })
  cartDetails: CartDetailsEntity[];

  @ManyToOne(() => CouponEntity, (couponEntity) => couponEntity.carts)
  @JoinColumn({ name: 'coupon_id' })
  coupon: CouponEntity;

  // @Column({
  //   type: 'decimal',
  //   name: 'additional_shipping_cost',
  //   precision: 20,
  //   scale: 6,
  //   default: () => "'0.000000'",
  //   transformer: new StringToNumericTransformer(),
  // })
  // additionalShippingCost: number;

  @Column({
    type: 'decimal',
    name: 'additional_shipping_cost',
    precision: 20,
    scale: 2,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  additionalShippingCost: number;
}
