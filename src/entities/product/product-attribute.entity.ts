import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';
import { CartDetailsEntity } from '../cart/cart-details.entity';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { CouponEntity } from '../coupon/coupon.entity';
import { OrderDetailsEntity } from '../order/order-details.entity';
import { InvoiceDetailsEntity } from '../payment/invoice/invoice-details.entity';
import { MerchantInvoiceDetailsEntity } from '../payment/invoice/merchant-invoice-details.entity';
import { ShopInvoiceDetailsEntity } from '../payment/invoice/shop-invoice-details.entity';
import { StockItemTransactionEntity } from '../stock/stock-item-transaction.entity';
import { StockPurchaseEntity } from '../stock/stock-purchase.entity';
import { AttributeEntity } from './attribute/attribute.entity';
import { ProductEntity } from './product.entity';

@Entity({ name: 'product_attributes', schema: 'public' })
export class ProductAttributeEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'reference', length: 60 })
  reference: string;

  @Column({ type: 'int', name: 'quantity', default: () => "'0'" })
  quantity: number;

  @Column({ type: 'int', name: 'reserved', default: () => "'0'" })
  reserved: number;

  @Column({ type: 'int', name: 'sold', default: () => "'0'" })
  sold: number;

  @Column({
    type: 'decimal',
    name: 'price',
    precision: 20,
    scale: 6,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  price: number;

  @Column({
    type: 'decimal',
    name: 'weight',
    precision: 20,
    scale: 6,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  weight: number;

  @Column({
    type: 'decimal',
    name: 'purchased_price',
    precision: 20,
    scale: 6,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  purchasedPrice: number;

  @Column({
    type: 'decimal',
    name: 'discount',
    precision: 20,
    scale: 6,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  discount: number;

  @Column({
    type: 'decimal',
    name: 'wholesale_price',
    precision: 20,
    scale: 6,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  wholesalePrice: number;

  @Column({
    type: 'decimal',
    name: 'additional_shipping_cost',
    precision: 20,
    scale: 2,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  additionalShippingCost: number;

  @Column({
    type: 'text',
    name: 'image',
    nullable: true,
  })
  image: string;

  @ManyToOne(
    () => ProductEntity,
    (productEntity) => productEntity.productAttributes,
  )
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @OneToMany(
    () => StockPurchaseEntity,
    (stockPurchaseEntity) => stockPurchaseEntity.productAttribute,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  stockPurchases: StockPurchaseEntity[];

  @OneToMany(
    () => StockItemTransactionEntity,
    (stockItemTransactionEntity) => stockItemTransactionEntity.productAttribute,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  stockItemTransactions: StockItemTransactionEntity[];

  @ManyToMany(
    () => AttributeEntity,
    (attributeEntity) => attributeEntity.productAttributes,
  )
  @JoinTable({
    name: 'product_attribute_combinations',
    joinColumn: {
      name: 'product_attribute_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'attribute_id',
      referencedColumnName: 'id',
    },
  })
  attributes: AttributeEntity[];

  @OneToMany(
    () => CouponEntity,
    (couponEntity) => couponEntity.freeProductAttribute,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  freeCoupons: CouponEntity[];

  @OneToMany(
    () => CartDetailsEntity,
    (cartDetailsEntity) => cartDetailsEntity.productAttribute,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  cartDetails: CartDetailsEntity[];

  @OneToMany(
    () => OrderDetailsEntity,
    (orderDetailsEntity) => orderDetailsEntity.productAttribute,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  orderDetails: OrderDetailsEntity[];

  @OneToMany(
    () => InvoiceDetailsEntity,
    (invoiceDetailsEntity) => invoiceDetailsEntity.productAttribute,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  invoiceDetails: InvoiceDetailsEntity[];

  @OneToMany(
    () => MerchantInvoiceDetailsEntity,
    (merchantInvoiceDetailsEntity) =>
      merchantInvoiceDetailsEntity.productAttribute,
  )
  merchantInvoiceDetails: MerchantInvoiceDetailsEntity[];

  @OneToMany(
    () => ShopInvoiceDetailsEntity,
    (shopInvoiceDetailsEntity) => shopInvoiceDetailsEntity.productAttribute,
  )
  shopInvoiceDetails: MerchantInvoiceDetailsEntity[];
}
