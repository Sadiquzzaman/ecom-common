import { OrderStatus } from '../../enum/order-status.enum';
import { Column, Index } from 'typeorm';
import { InvoiceStatus } from '../../enum/invoice-status.enum';
import { PaymentMethodEnum } from '../../enum/payment-method.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { InvoiceTypeEnum } from '../../enum/invoice-type.enum';

export class InvoiceBaseEntity extends CustomBaseEntity {
  @Column({
    type: 'enum',
    name: 'status',
    enum: InvoiceStatus,
    nullable: false,
    default: InvoiceStatus.UNPAID,
  })
  status: InvoiceStatus;

  @Column({
    type: 'enum',
    name: 'payment_method',
    enum: PaymentMethodEnum,
    nullable: false,
    default: PaymentMethodEnum.NotSelected,
  })
  paymentMethod: PaymentMethodEnum;


  @Column({
    type: 'enum',
    name: 'invoice_type',
    enum: InvoiceTypeEnum,
    nullable: false,
    default: InvoiceTypeEnum.PURCHASED,
  })
  invoiceType: InvoiceTypeEnum;

  @Column({
    type: 'decimal',
    name: 'total_discount',
    nullable: false,
    default: 0,
  })
  totalDiscount: number;

  @Column({
    type: 'decimal',
    name: 'total_shipping_cost',
    nullable: false,
    default: 0,
  })
  totalShippingCost: number;

  @Column({
    type: 'decimal',
    name: 'total_additional_shipping_cost',
    nullable: false,
    default: 0,
  })
  totalAdditionalShippingCost: number;

  @Column({
    type: 'decimal',
    name: 'invoice_total',
    nullable: false,
    default: 0,
  })
  invoiceTotal: number;

  @Column({
    type: 'decimal',
    name: 'commissoin',
    nullable: false,
    default: 0,
  })
  commission: number;

  @Column({
    type: 'enum',
    name: 'delivery_status',
    enum: OrderStatus,
    default: `${OrderStatus.Pending}`,
  })
  deliveryStatus: OrderStatus.Pending;
}
