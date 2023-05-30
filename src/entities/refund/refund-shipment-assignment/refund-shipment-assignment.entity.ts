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
import { ShippingStatus } from '../../../enum/shipping-status.enum';
import { RefundShippingType } from '../../../enum/refun-shipping-type.enum';
import { CustomerEntity } from '../../user/customer.entity';
import { RefundApprovalEntity } from '../refund-approval/refund-approval.entity';

@Entity({ name: 'refund_shipment_assignment', schema: 'public' })
export class RefundShipmentAssignmentEntity extends CustomBaseEntity {
  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(
    () => CustomerRefundRequestEntity,
    (cusoterRefundRequest) => cusoterRefundRequest.refundShippingAssignment,
  )
  // @ManyToOne(() => CustomerRefundRequestEntity)
  @JoinColumn({ name: 'customer_refund_request_id' })
  refundRequest: CustomerRefundRequestEntity;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @ManyToOne(() => TransporterEntity, (transporter) => transporter.assignment)
  @JoinColumn({ name: 'transporter_id' })
  transporter: TransporterEntity;

  @Column({ type: 'enum', name: 'status', enum: ShippingStatus })
  status: ShippingStatus;

  @Column({ name: 'assigned_at', type: Date, nullable: true })
  assignedAt: Date;

  @Column({ name: 'picked_at', type: Date, nullable: true })
  pickedAt: Date;

  @Column({ name: 'received_at', type: Date, nullable: true })
  receivedAt: Date;

  @Column({ name: 'expected_pickup_date', type: Date, nullable: true })
  expectedPickupDate: Date;

  @Column({ name: 'pick_from', type: String, nullable: true })
  pickFrom: String;

  @Column({ name: 'ship_to', type: String, nullable: true })
  shipTo: String;

  @Column({ type: 'enum', name: 'shipping_type', enum: RefundShippingType })
  shippingType: RefundShippingType;

  @OneToOne(
    () => RefundApprovalEntity,
    (refundApprovalEntity) => refundApprovalEntity.refundShipmentAssignment,
  )
  @JoinColumn({ name: 'refund_approval_id' })
  refundApproval: RefundApprovalEntity;
}
