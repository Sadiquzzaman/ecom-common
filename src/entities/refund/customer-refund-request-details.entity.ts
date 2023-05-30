import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { RefundStatus } from '../../enum/refund-status.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ShopInvoiceDetailsEntity } from '../payment/invoice/shop-invoice-details.entity';
import { ProductEntity } from '../product/product.entity';
import { CustomerRefundRequestEntity } from '../refund/customer-refund-request.entity';
import { ProductAttributeEntity } from './../product/product-attribute.entity';

@Entity({ name: 'refund_request_details', schema: 'public' })
export class CustomerRefundRequestDetailEntity extends CustomBaseEntity {
  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => ProductAttributeEntity)
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @Column({
    type: 'enum',
    name: 'refund_status',
    enum: RefundStatus,
    default: `${RefundStatus.REFUND_REQUEST}`,
  })
  refundStatus: RefundStatus;

  @Column({
    name: 'refund_request_quantity',
    type: 'int',
    nullable: false,
    default: 0,
  })
  refundRequestQuantity: number;

  @Column({
    name: 'refund_request_date',
    type: 'timestamp without time zone',
    nullable: false,
    default: new Date(),
  })
  refundRequestDate: Date;

  @Column({
    name: 'refund_picked_quantity',
    type: 'int',
    nullable: true,
    default: 0,
  })
  refundPickedQuantity: number;

  @Column({
    name: 'refund_picked_date',
    type: 'timestamp without time zone',
    nullable: true,
  })
  refundPickedDate: Date;

  @Column({
    name: 'refund_approved_quantity',
    type: 'int',
    nullable: true,
  })
  refundApprovedQuantity: number;

  @Column({
    name: 'refund_approved_date',
    type: 'timestamp without time zone',
    nullable: true,
  })
  refundApprovedDate: Date;

  @Column({
    name: 'price',
    type: 'decimal',
    nullable: false,
    default: 0,
  })
  price: number;

  @Column({
    name: 'refund_reason',
    type: 'varchar',
    nullable: false,
    default: 'say some reasons',
  })
  refundReason: String;

  @Column({
    name: 'refundable_amount',
    type: 'decimal',
    nullable: true,
    default: 0,
  })
  refundableAmount: number;

  @ManyToOne(
    () => CustomerRefundRequestEntity,
    (cusoterRefundRequest) => cusoterRefundRequest.refundRequestDetails,
  )
  @JoinColumn({ name: 'customer_refund_request_id' })
  customerRefundRequest: CustomerRefundRequestEntity;

  @OneToOne(
    () => ShopInvoiceDetailsEntity,
    (shopInvoiceDetailsEntity) => shopInvoiceDetailsEntity.refundRequestDetail,
  )
  @JoinColumn({ name: 'shop_invoice_detail_id' })
  shopInvoiceDetail: ShopInvoiceDetailsEntity;
}
