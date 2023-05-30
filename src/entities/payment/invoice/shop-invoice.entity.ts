import { MarchantInvoiceEntity } from '../invoice/marchant-invoice.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AddressEntity } from '../../../entities/core/address.entity';
import { InvoiceBaseEntity } from '../../core/invoice-base.entity';
import { OrderEntity } from '../../order/order.entity';
import { ShopEntity } from '../../shop/shop.entity';
import { MerchantEntity } from '../../user/merchant.entity';
import { InvoiceEntity } from './invoice.entity';
import { ShopInvoiceDetailsEntity } from './shop-invoice-details.entity';
import { AssignStatus } from '../../../enum/assign-status.enum';
import { ShipmentDeliveryAssignmentEntity } from '../../shipment/shipment-delivery-assignment.entity';
import { CustomerEntity } from '../../../entities/user/customer.entity';

@Entity({ name: 'shop_invoices', schema: 'public' })
@Index('shop_invoices-status-isactive-idx', ['status', 'isActive'])
export class ShopInvoiceEntity extends InvoiceBaseEntity {
  @ManyToOne(() => ShopEntity, (shop) => shop.shopInvoices)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;

  @ManyToOne(
    () => MerchantEntity,
    (merchantEntity) => merchantEntity.shopInvoices,
  )
  @JoinColumn({ name: 'merchant_id' })
  merchant: MerchantEntity;

  @ManyToOne(
    () => CustomerEntity,
    (customerEntity) => customerEntity.shopInvoices,
  )
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @ManyToOne(
    () => MarchantInvoiceEntity,
    (merchantInvoiceEntity) => merchantInvoiceEntity.shopInvoice,
  )
  @JoinColumn({ name: 'merchant_invoice_id' })
  merchantInvoice: MarchantInvoiceEntity;

  @OneToMany(
    () => ShopInvoiceDetailsEntity,
    (shopInvoiceDetailsEntity) => shopInvoiceDetailsEntity.shopInvoice,
    { cascade: ['insert', 'remove', 'recover', 'soft-remove'] },
  )
  shopInvoiceDetails: ShopInvoiceDetailsEntity[];

  @ManyToOne(() => InvoiceEntity, (invoiceEntity) => invoiceEntity.shopInvoice)
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoiceEntity;

  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => AddressEntity)
  @JoinColumn({ name: 'billing_address_id' })
  billingAddress: AddressEntity;

  @ManyToOne(() => AddressEntity)
  @JoinColumn({ name: 'shipping_address_id' })
  shippingAddress: AddressEntity;

  @OneToOne(
    () => ShipmentDeliveryAssignmentEntity,
    (deliveryAssignment) => deliveryAssignment.shopInvoice,
  )
  deliveryAssignment: ShipmentDeliveryAssignmentEntity;

  @Column({
    type: 'enum',
    name: 'assign_status',
    enum: AssignStatus,
    nullable: false,
    default: AssignStatus.UnAssigned,
  })
  assignStatus: AssignStatus;
}
