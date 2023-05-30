import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CustomBaseEntity } from '../../core/custom-base.entity';
import { OrderEntity } from '../..//order/order.entity';
import { InvoiceEntity } from '../../payment/invoice/invoice.entity';
import { CustomerRefundRequestDetailEntity } from '../customer-refund-request-details.entity';
import { CustomerRefundRequestEntity } from '../customer-refund-request.entity';
import { TransporterEntity } from '../../user/transporter.entity';
import { Bool } from '../../../enum/bool.enum';
import { RefundShippingType } from '../../../enum/refun-shipping-type.enum';
import { CustomerEntity } from '../../user/customer.entity';
import { ShopEntity } from '../../shop/shop.entity';
import { ShippingStatus } from '../../../enum/shipping-status.enum';
import { RefundApprovalDetailsEntity } from './refund-approval-details.entity';
import { AddressEntity } from '../../../entities/core/address.entity';
import { AssignStatus } from '../../../enum/assign-status.enum';
import { RefundShipmentAssignmentEntity } from '../refund-shipment-assignment/refund-shipment-assignment.entity';

@Entity({ name: 'refund_approval', schema: 'public' })
export class RefundApprovalEntity extends CustomBaseEntity {
  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => CustomerRefundRequestEntity)
  @JoinColumn({ name: 'customer_refund_request_id' })
  refundRequest: CustomerRefundRequestEntity;

  @Column({ type: 'enum', name: 'is_approved', enum: Bool })
  isApproved: Bool;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @ManyToOne(() => ShopEntity)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;

  // Customer
  @ManyToOne(() => AddressEntity)
  @JoinColumn({ name: 'address_id' })
  address: AddressEntity;

  // @ManyToOne(() => ShopEntity, (shopEntity) => shopEntity.products)
  // @JoinColumn({ name: 'shop_id' })
  // shop: ShopEntity;

  @Column({ type: 'enum', name: 'assign_status', enum: AssignStatus })
  assignStatus: AssignStatus;

  @OneToMany(
    () => RefundApprovalDetailsEntity,
    (refundApprovalDetailsEntity) => refundApprovalDetailsEntity.refundApproval,
    { cascade: true },
  )
  @JoinColumn({ name: 'refund_approval_id' })
  refundApprovalDetails: RefundApprovalDetailsEntity[];

  @OneToOne(
    () => RefundShipmentAssignmentEntity,
    (refundShipmentAssignmentEntity) =>
      refundShipmentAssignmentEntity.refundApproval,
  )
  refundShipmentAssignment: RefundShipmentAssignmentEntity;
}
