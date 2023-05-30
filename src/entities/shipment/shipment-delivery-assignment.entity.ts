import { ShippingStatus } from '../../enum/shipping-status.enum';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { OrderStatus } from '../../enum/order-status.enum';
import { AddressEntity } from '../core/address.entity';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { OrderEntity } from '../order/order.entity';
import { ShopInvoiceEntity } from '../payment/invoice/shop-invoice.entity';
import { ShopEntity } from '../shop/shop.entity';
import { CustomerEntity } from '../user/customer.entity';
import { TransporterEntity } from '../user/transporter.entity';

@Entity({ name: 'shipment-delivery-assignment', schema: 'public' })
@Index(['order', 'shopInvoice'])
export class ShipmentDeliveryAssignmentEntity extends CustomBaseEntity {
  // @Column({ name: 'shop_invoice_id', type: String })
  // shopInvoice: String;

  @OneToOne(
    () => ShopInvoiceEntity,
    (shopInvoice) => shopInvoice.deliveryAssignment,
  )
  @JoinColumn({ name: 'shop_invoice_id' })
  shopInvoice: ShopInvoiceEntity;

  // @Column({ name: 'delivery_man_id', type: String })
  // @Index('delivery_man_idx')
  // deliveryMan: String;
  @ManyToOne(() => TransporterEntity, (transporter) => transporter.assignment)
  @JoinColumn({ name: 'transporter_id' })
  @Index('transporter_idx')
  transporter: TransporterEntity;

  // @Index('customer_name_idx')
  // @Column({ name: 'customer_id', type: String, nullable: true })
  // customer: String;

  @OneToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id' })
  @Index('customer_name_idx')
  customer: CustomerEntity;

  @Column({ name: 'assigned_at', type: Date, nullable: true })
  assignedAt: Date;

  @Column({ name: 'delivered_at', type: Date, nullable: true })
  deliveredAt: Date;

  @Column({ name: 'expected_shipment_date', type: Date })
  expectedShipmentDate: Date;

  @Column({ name: 'expected_delivery_date', type: Date })
  expectedDeliveryDate: Date;

  // @Column({ name: 'order_id', type: String })
  // order: String;

  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  @Index('order_idx')
  order: OrderEntity;

  // @Column({ name: 'shipping_address_id', type: String })
  // shippingAddress: String;

  @ManyToOne(() => AddressEntity)
  @JoinColumn({ name: 'shipping_address_id' })
  @Index('shipping_address_idx')
  shippingAddress: AddressEntity;

  @Column({ name: 'shop_location', type: String, nullable: true })
  shopLocation: String;

  // @Column({ name: 'shop_id', type: String })
  // shop: String;

  @ManyToOne(() => ShopEntity)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;

  @Column({ type: 'enum', name: 'status', enum: ShippingStatus })
  status: ShippingStatus;

  @Column({ name: 'amount', type: 'decimal', nullable: true, default: 0 })
  amount: Number;

  @Column({ name: 'remark', type: 'text', nullable: true })
  remark: String;

  @Column({
    name: 'additonal_cost',
    type: 'decimal',
    nullable: true,
    default: 0,
  })
  additionalCost: Number;
}
// @Column({ name: 'shop_invoice_id', type: String })
//   shopInvoice: ShopInvoiceEntity;

//   @Column({ name: 'delivery_man_id', type: String })
//   @Index('delivery_man_idx')
//   deliveryMan: TransporterEntity;

//   @Index('customer_name_idx')
//   @Column({ name: 'customer_id', type: String })
//   customer: CustomerEntity;

//   @Column({ name: 'assigned_at', type: Date })
//   assignedAt: Date;

//   @Column({ name: 'expected_delivery_date', type: Date })
//   expectedDeliveryDate: Date;

//   @Column({ name: 'order_id', type: String })
//   order: OrderEntity;

//   @Column({ name: 'shipping_address_id', type: String })
//   shippingAddress: AddressEntity;

//   @Column({ name: 'shop_location', type: String })
//   shopLocation: String;

//   @Column({ name: 'shop_id', type: String })
//   shop: ShopEntity;

//   @Column({ type: 'enum', name: 'status', enum: OrderStatus })
//   status: OrderStatus;

//   @Column({ name: 'amount', type: 'decimal', nullable: true, default: 0 })
//   amount: Number;

//   @Column('text')
//   remark: String;

//   @Column({
//     name: 'additonal_cost',
//     type: 'decimal',
//     nullable: true,
//     default: 0,
//   })
//   additionalCost: Number;
