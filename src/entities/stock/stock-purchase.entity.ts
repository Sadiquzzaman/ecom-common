import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ProductAttributeEntity } from '../product/product-attribute.entity';
import { ProductEntity } from '../product/product.entity';
import { StockItemTransactionEntity } from './stock-item-transaction.entity';

@Entity({ name: 'stock_purchases', schema: 'public' })
export class StockPurchaseEntity extends CustomBaseEntity {

  @Column({ type: 'int', name: 'quantity', default: () => "'0'" })
  quantity: number;

  @Column({ type: 'int', name: 'in_hand', default: () => "'0'" })
  inHand: number;

  @Column({ type: 'int', name: 'in_cart', default: () => "'0'" })
  inCart: number;

  @Column({ type: 'int', name: 'in_order', default: () => "'0'" })
  inOrder: number;

  @Column({ type: 'int', name: 'defective', default: () => "'0'" })
  defective: number;

  @Column({ type: 'int', name: 'returned', default: () => "'0'" })
  returned: number;

  @Column({ type: 'decimal', name: 'purchased_price', nullable: false })
  purchasedPrice: number;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.stockPurchases)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
      () => ProductAttributeEntity,
      (productAttributeEntity) => productAttributeEntity.stockPurchases,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @OneToMany(
      () => StockItemTransactionEntity,
      (stockItemTransactionEntity) => stockItemTransactionEntity.stockPurchase,
  )
  @JoinColumn({ name: 'stock_purchase_id' })
  stockItemTransactions: StockItemTransactionEntity[];

}
