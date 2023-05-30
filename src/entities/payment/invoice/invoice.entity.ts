import { InvoiceBaseEntity } from '../../core/invoice-base.entity';
import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AddressEntity } from '../../../entities/core/address.entity';
import { OrderEntity } from '../../order/order.entity';
import { CustomerEntity } from '../../user/customer.entity';
import { UserEntity } from '../../user/user.entity';
import { InvoiceDetailsEntity } from './invoice-details.entity';
import { MarchantInvoiceEntity } from './marchant-invoice.entity';
import { ShopInvoiceEntity } from '../invoice/shop-invoice.entity';

@Entity({ name: 'invoices', schema: 'public' })
@Index('invoices-status-isactive-idx', ['status', 'isActive'])
export class InvoiceEntity extends InvoiceBaseEntity {
  @ManyToOne(() => UserEntity, (userEntity) => userEntity.invoices)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @OneToMany(
    () => InvoiceDetailsEntity,
    (invoiceDetailsEntity) => invoiceDetailsEntity.invoice,
    { cascade: ['insert', 'remove', 'recover', 'soft-remove'] },
  )
  invoiceDetails: InvoiceDetailsEntity[];

  @OneToMany(
    () => MarchantInvoiceEntity,
    (merchantInvoiceEntity) => merchantInvoiceEntity.invoice,
    { cascade: ['insert', 'remove', 'recover', 'soft-remove'] },
  )
  merchantInvoice: MarchantInvoiceEntity[];

  @OneToMany(
    () => ShopInvoiceEntity,
    (shopInvoiceEntity) => shopInvoiceEntity.invoice,
    { cascade: ['insert', 'remove', 'recover', 'soft-remove'] },
  )
  shopInvoice: ShopInvoiceEntity[];

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
}
