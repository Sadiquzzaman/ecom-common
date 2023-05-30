import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';
import { CartEntity } from '../cart/cart.entity';
import { AddressEntity } from '../core/address.entity';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';
import { OrderEntity } from '../order/order.entity';
import { ShopInvoiceEntity } from '../payment/invoice/shop-invoice.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'customers', schema: 'public' })
export class CustomerEntity extends CustomBaseEntity {
  @Column({
    type: 'decimal',
    name: 'outstanding_allow_amount',
    precision: 20,
    scale: 6,
    default: '0.000000',
    transformer: new StringToNumericTransformer(),
    nullable: true,
  })
  outstandingAllowAmount: number;

  @Column({
    type: 'int',
    name: 'max_payment_days',
    unsigned: true,
    default: () => "'15'",
    nullable: true,
  })
  maxPaymentDays: number;

  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.customer)
  @JoinColumn({ name: 'customer_id' })
  notes: NoteEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;

  @OneToOne(() => UserEntity, (userEntity) => userEntity.customer)
  user: UserEntity;

  @OneToMany(() => CartEntity, (cartEntity) => cartEntity.customer)
  @JoinColumn({ name: 'customer_id' })
  carts: CartEntity[];

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.customer)
  @JoinColumn({ name: 'customer_id' })
  orders: OrderEntity[];

  @OneToMany(
    () => ShopInvoiceEntity,
    (shopInvoiceEntity) => shopInvoiceEntity.customer,
  )
  shopInvoices: ShopInvoiceEntity[];

  @OneToOne(() => AddressEntity)
  @JoinColumn({ name: 'billing_address_id' })
  billingAddress: AddressEntity;

  @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.customer)
  @JoinColumn({ name: 'customer_id' })
  shippingAddresses: AddressEntity[];
}
