import { ShopInvoiceEntity } from '../invoice/shop-invoice.entity';
import { Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AddressEntity } from '../../../entities/core/address.entity';
import { InvoiceBaseEntity } from '../../core/invoice-base.entity';
import { OrderEntity } from '../../order/order.entity';
import { MerchantEntity } from '../../user/merchant.entity';
import { InvoiceEntity } from './invoice.entity';
import { MerchantInvoiceDetailsEntity } from './merchant-invoice-details.entity';
import { CustomerEntity } from '../../../entities/user/customer.entity';

@Entity({ name: 'marchent_invoices', schema: 'public' })
@Index('marchent_invoices-status-isactive-idx', ['status', 'isActive'])
export class MarchantInvoiceEntity extends InvoiceBaseEntity {
  @ManyToOne(
    () => InvoiceEntity,
    (invoiceEntity) => invoiceEntity.merchantInvoice,
  )
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoiceEntity;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToMany(
    () => ShopInvoiceEntity,
    (shopInvoiceEntity) => shopInvoiceEntity.merchantInvoice,
    { cascade: ['insert', 'remove', 'recover', 'soft-remove'] },
  )
  shopInvoice: ShopInvoiceEntity[];

  @ManyToOne(() => MerchantEntity, (merchant) => merchant.marchentInvoices)
  @JoinColumn({ name: 'merchant_id' })
  merchant: MerchantEntity;

  @OneToMany(
    () => MerchantInvoiceDetailsEntity,
    (merchantInvoiceDetailsEntity) =>
      merchantInvoiceDetailsEntity.merchantInvoice,
    { cascade: ['insert', 'remove', 'recover', 'soft-remove'] },
  )
  marchantInvoiceDetails: MerchantInvoiceDetailsEntity[];

  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => AddressEntity)
  @JoinColumn({ name: 'billing_address_id' })
  billingAddress: AddressEntity;

  @ManyToOne(() => AddressEntity)
  @JoinColumn({ name: 'shipping_address_id' })
  shippingAddress: AddressEntity;
}
