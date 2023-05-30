import { ProductAttributeEntity } from './../../product/product-attribute.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../core/custom-base.entity';
import { RefundApprovalEntity } from './refund-approval.entity';
import { ProductEntity } from '../../product/product.entity';

@Entity({ name: 'refund_approval_details', schema: 'public' })
export class RefundApprovalDetailsEntity extends CustomBaseEntity {
  @ManyToOne(
    () => RefundApprovalEntity,
    (refundApprovalEntity) => refundApprovalEntity.refundApprovalDetails,
  )
  @JoinColumn({ name: 'refund_approval_id' })
  refundApproval: RefundApprovalEntity;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => ProductAttributeEntity)
  @JoinColumn({ name: 'product_attribute_id' })
  productAttributes: ProductAttributeEntity;

  @Column({
    name: 'refund_reason',
    type: 'varchar',
    nullable: false,
    default: 'say some reasons',
  })
  refundReason: String;

  @Column({ type: 'int', name: 'quantity', nullable: false })
  quantity: number;
}
