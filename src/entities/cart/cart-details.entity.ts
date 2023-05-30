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
import { CartEntity } from './cart.entity';

@Entity({ name: 'cart_details', schema: 'public' })
export class CartDetailsEntity extends CustomBaseEntity {
  @Column({ type: 'int', name: 'quantity', default: () => "'0'" })
  quantity: number;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.cartDetails)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.cartDetails,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @ManyToOne(() => CartEntity, (cartEntity) => cartEntity.cartDetails)
  @JoinColumn({ name: 'cart_id' })
  cart: CartEntity;

  @OneToMany(() => StockItemTransactionEntity, (stockItemTransactionEntity) => stockItemTransactionEntity.cartDetails)
  @JoinColumn({ name: 'cart_details_id' })
  stockItemTransactions: StockItemTransactionEntity[];
}
