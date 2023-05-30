import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CartEntity } from '../cart/cart.entity';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { InvoiceEntity } from '../payment/invoice/invoice.entity';
import { UserEntity } from '../user/user.entity';
import { OrderDetailsEntity } from './order-details.entity';
import { OrderStatus } from '../../enum/order-status.enum';
import { AddressEntity } from '../core/address.entity';
import { CouponEntity } from '../coupon/coupon.entity';
import { CustomerEntity } from '../user/customer.entity';

@Entity({ name: 'orders', schema: 'public' })
@Index('orders-reference-isactive-idx', ['reference', 'isActive'])
export class OrderEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'reference', length: 60 })
  @Index('orders-reference-idx', { unique: true })
  reference: string;

  // @Column({ type: 'varchar', name: 'coupon', length: 60, nullable: true })
  // coupon: string;

  @Column({
    type: 'timestamp without time zone',
    name: 'delivered_at',
    nullable: true,
  })
  deliveredAt: Date | null;

  @Column({
    type: 'enum',
    name: 'status',
    enum: OrderStatus,
    default: `${OrderStatus.Pending}`,
  })
  status: OrderStatus;

  @OneToOne(() => InvoiceEntity)
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoiceEntity;

  @OneToOne(() => CartEntity)
  @JoinColumn({ name: 'cart_id' })
  cart: CartEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.carts)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => CustomerEntity, (customerEntity) => customerEntity.carts)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToMany(
    () => OrderDetailsEntity,
    (orderDetailsEntity) => orderDetailsEntity.order,
  )
  @JoinColumn({ name: 'order_id' })
  orderDetails: OrderDetailsEntity[];

  @ManyToOne(
    () => AddressEntity,
    (addressEntity) => addressEntity.billingInvoices,
  )
  @JoinColumn({ name: 'billing_address_id' })
  billingAddress: AddressEntity;

  @ManyToOne(
    () => AddressEntity,
    (addressEntity) => addressEntity.shippingInvoices,
  )
  @JoinColumn({ name: 'shipping_address_id' })
  shippingAddress: AddressEntity;

  @ManyToOne(() => CouponEntity, (couponEntity) => couponEntity.carts)
  @JoinColumn({ name: 'coupon_id' })
  coupon: CouponEntity;
}
