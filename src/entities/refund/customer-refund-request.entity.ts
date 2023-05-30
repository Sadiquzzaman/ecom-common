import { CustomerEntity } from './../user/customer.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { OrderEntity } from '../order/order.entity';
import { InvoiceEntity } from '../payment/invoice/invoice.entity';
import { CustomerRefundRequestDetailEntity } from './customer-refund-request-details.entity';
import { AssignStatus } from '../../enum/assign-status.enum';
import { RefundShipmentAssignmentEntity } from '../entities.config';

@Entity({ name: 'refund_request', schema: 'public' })
export class CustomerRefundRequestEntity extends CustomBaseEntity {
  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => InvoiceEntity)
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoiceEntity;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @Column({ name: 'description', type: String, nullable: true })
  description: String;

  @Column({
    name: 'total_refundable_amount',
    type: 'decimal',
    nullable: false,
    default: 0,
  })
  totalRefundableAmount: number;

  @OneToMany(
    () => CustomerRefundRequestDetailEntity,
    (customerRefundDetails) => customerRefundDetails.customerRefundRequest,
    { cascade: true },
  )
  refundRequestDetails: CustomerRefundRequestDetailEntity[];

  @Column({
    type: 'enum',
    name: 'assign_status',
    enum: AssignStatus,
    nullable: true,
    default: `${AssignStatus.UnAssigned}`,
  })
  assignStatus: AssignStatus;

  @OneToMany(
    () => RefundShipmentAssignmentEntity,
    (refundShipmentAssignment) => refundShipmentAssignment.refundRequest,
  )
  refundShippingAssignment: RefundShipmentAssignmentEntity[];
}
