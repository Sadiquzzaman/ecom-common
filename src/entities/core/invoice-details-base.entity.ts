import { Column } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';

export class InvoiceDetailsBaseEntity extends CustomBaseEntity {
  @Column({ type: 'decimal', name: 'price', nullable: false, default: 0 })
  price: number;

  @Column({ type: 'decimal', name: 'vat', nullable: false, default: 0 })
  vat: number;

  @Column({ type: 'decimal', name: 'discount', nullable: false, default: 0 })
  discount: number;

  @Column({
    type: 'decimal',
    name: 'additional_shipping_cost',
    nullable: false,
    default: 0,
  })
  additionalShippingCost: number;

  @Column({ type: 'int', name: 'quantity', nullable: false, default: 0 })
  quantity: number;

  @Column({
    type: 'decimal',
    name: 'total_discount',
    nullable: false,
    default: 0,
  })
  totalDiscount: number;

  @Column({
    type: 'decimal',
    name: 'total_additional_shipping_cost',
    nullable: false,
    default: 0,
  })
  totalAdditionalShippingCost: number;

  @Column({ type: 'decimal', name: 'grand_total', nullable: true })
  grandTotal: number;

  @Column({ type: 'decimal', name: 'commision', nullable: false, default: 0.0 })
  commission: number;

  @Column({ type: 'text', name: 'additional', nullable: true })
  additional: string;

  @Column({ type: 'text', name: 'note', nullable: true })
  note: string;
}
