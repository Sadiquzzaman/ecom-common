import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ProductAttributeEntity } from '../product/product-attribute.entity';
import { ProductEntity } from '../product/product.entity';
import { StockItemTransactionEntity } from '../stock/stock-item-transaction.entity';
import { OrderEntity } from './order.entity';

@Entity({ name: 'order_details', schema: 'public' })
export class OrderDetailsEntity extends CustomBaseEntity {
  @Column({ type: 'int', name: 'quantity', nullable: false })
  quantity: number;

  @Column({ type: 'decimal', name: 'price', nullable: true })
  price: number;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.orderDetails)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.orderDetails,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @ManyToOne(() => OrderEntity, (orderEntity) => orderEntity.orderDetails)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @OneToMany(() => StockItemTransactionEntity, (stockItemTransactionEntity) => stockItemTransactionEntity.orderDetails)
  @JoinColumn({ name: 'order_details_id' })
  stockItemTransactions: StockItemTransactionEntity[];
}
