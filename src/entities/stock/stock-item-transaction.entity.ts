import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { StockStatus } from '../../enum/stock-status.enum';
import { Bool } from '../../enum/bool.enum';
import { ProductEntity } from '../product/product.entity';
import { ProductAttributeEntity } from '../product/product-attribute.entity';
import { CartDetailsEntity } from '../cart/cart-details.entity';
import { OrderDetailsEntity } from '../order/order-details.entity';
import { StockPurchaseEntity } from "./stock-purchase.entity";

@Entity({ name: 'stock_item_transactions', schema: 'public' })
export class StockItemTransactionEntity extends CustomBaseEntity {

  @Column({ type: 'decimal', name: 'purchasing_price', default: () => "'0'" })
  purchasingPrice: number;

  @Column({ type: 'decimal', name: 'selling_price', default: () => "'0'" })
  sellingPrice: number;

  @Column({
    type: 'date',
    name: 'selling_at',
    nullable: true,
  })
  sellingAt: Date | null;

  @Column({ type: 'decimal', name: 'discount', default: () => "'0'" })
  discount: number;

  @Column({ type: 'decimal', name: 'coupon_discount', default: () => "'0'" })
  couponDiscount: number;

  @Column({
    type: 'enum',
    name: 'is_free_gift',
    enum: Bool,
    default: `${Bool.No}`,
  })
  isFreeGift: Bool;

  @Column({
    type: 'enum',
    name: 'status',
    enum: StockStatus,
    default: `${StockStatus.IN_HAND}`,
  })
  status: StockStatus;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.stockItemTransactions)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
      () => ProductAttributeEntity,
      (productAttributeEntity) => productAttributeEntity.stockItemTransactions,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @ManyToOne(() => StockPurchaseEntity, (stockPurchaseEntity) => stockPurchaseEntity.stockItemTransactions)
  @JoinColumn({ name: 'stock_purchase_id' })
  stockPurchase: StockPurchaseEntity;

  @ManyToOne(() => CartDetailsEntity, (cartDetailsEntity) => cartDetailsEntity.stockItemTransactions)
  @JoinColumn({ name: 'cart_details_id' })
  cartDetails: CartDetailsEntity;

  @ManyToOne(() => OrderDetailsEntity, (orderDetailsEntity) => orderDetailsEntity.stockItemTransactions)
  @JoinColumn({ name: 'order_details_id' })
  orderDetails: OrderDetailsEntity;

}
