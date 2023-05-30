import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Point } from '../../dto/location/point';
import { Bool } from '../../enum/bool.enum';
import { PointToStringTransformer } from '../../transformers/point-to-string.transformer';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';
import { CartDetailsEntity } from '../cart/cart-details.entity';
import { CategoryEntity } from '../category/category.entity';
import { BrandEntity } from '../core/brand.entity';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { CouponEntity } from '../coupon/coupon.entity';
import { OrderDetailsEntity } from '../order/order-details.entity';
import { InvoiceDetailsEntity } from '../payment/invoice/invoice-details.entity';
import { MerchantInvoiceDetailsEntity } from '../payment/invoice/merchant-invoice-details.entity';
import { ShopInvoiceDetailsEntity } from '../payment/invoice/shop-invoice-details.entity';
import { PromotionEntity } from '../shop/promotion.entity';
import { ShopEntity } from '../shop/shop.entity';
import { StockItemTransactionEntity } from '../stock/stock-item-transaction.entity';
import { ActiveStatus } from '../../enum/active.enum';
import { MerchantEntity } from '../user/merchant.entity';
import { StockPurchaseEntity } from '../stock/stock-purchase.entity';
import { UserEntity } from '../user/user.entity';
import { ProductAttributeEntity } from './product-attribute.entity';
import { ProductReviewEntity } from './product-review.entity';

@Entity({ name: 'products', schema: 'public' })
export class ProductEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 130 })
  name: string;

  @Column({ type: 'text', name: 'description' })
  description: string;

  @Column({ type: 'text', name: 'summary' })
  summary: string;

  @Column({ type: 'varchar', name: 'location', length: 150, nullable: true })
  @Index('products-location-idx', { unique: false })
  location: string;

  @Column({
    type: 'point',
    name: 'geo_location',
    transformer: new PointToStringTransformer(),
  })
  geoLocation: Point;

  @Column({ type: 'varchar', name: 'meta_description', length: 512 })
  metaDescription: string;

  @Column({ type: 'varchar', name: 'meta_keywords', length: 255 })
  metaKeywords: string;

  @Column({ type: 'varchar', name: 'meta_title', length: 130 })
  metaTitle: string;

  @Column({
    type: 'enum',
    enum: ActiveStatus,
    name: 'is_approved',
    default: `${ActiveStatus.disabled}`,
  })
  isApproved: ActiveStatus;

  @Column({
    type: 'enum',
    enum: ActiveStatus,
    name: 'is_deleted',
    default: `${ActiveStatus.disabled}`,
  })
  isDeleted: ActiveStatus;

  @Column({
    type: 'enum',
    name: 'is_refundable',
    enum: Bool,
    default: `${Bool.No}`,
  })
  isRefundable: Bool;

  @Column({
    type: 'uuid',
    name: 'approved_by',
    nullable: true,
  })
  approvedBy: string | null;

  @Column({
    type: 'timestamp without time zone',
    name: 'approved_at',
    nullable: true,
  })
  approvedAt: Date | null;

  @Column({ type: 'varchar', name: 'reference', length: 60 })
  reference: string;

  @Column({ type: 'int', name: 'quantity', default: () => "'0'" })
  quantity: number;

  @Column({ type: 'int', name: 'reserved', default: () => "'0'" })
  reserved: number;

  @Column({ type: 'int', name: 'sold', default: () => "'0'" })
  sold: number;

  @Column({ type: 'int', name: 'popular', default: () => "'0'" })
  popular: number;

  @Column({ type: 'int', name: 'trending', default: () => "'0'" })
  trending: number;

  @Column({
    type: 'decimal',
    name: 'rating',
    precision: 4,
    scale: 2,
    default: () => "'0.00'",
    transformer: new StringToNumericTransformer(),
  })
  rating: number;

  @Column({
    type: 'int',
    name: 'low_stock_threshold',
    width: 1,
    default: () => "'3'",
  })
  lowStockThreshold: number;

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
    type: 'enum',
    name: 'on_sale',
    enum: Bool,
    default: `${Bool.No}`,
  })
  onSale: Bool;

  @Column({
    type: 'enum',
    name: 'is_virtual',
    enum: Bool,
    default: `${Bool.No}`,
  })
  isVirtual: Bool;

  @Column({
    type: 'enum',
    name: 'is_pack',
    enum: Bool,
    default: `${Bool.No}`,
  })
  isPack: Bool;

  @Column('jsonb', { name: 'image', nullable: false })
  image: { cover: string; gallery: string[] };

  @OneToMany(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.product,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttributes: ProductAttributeEntity[];

  @ManyToOne(() => ShopEntity, (shopEntity) => shopEntity.products)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;

  @ManyToOne(() => CategoryEntity, (categoryEntity) => categoryEntity.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.products)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => MerchantEntity, (merchantEntity) => merchantEntity.products)
  @JoinColumn({ name: 'merchant_id' })
  merchant: MerchantEntity;

  @OneToMany(
    () => CartDetailsEntity,
    (cartDetailsEntity) => cartDetailsEntity.product,
  )
  @JoinColumn({ name: 'product_id' })
  cartDetails: CartDetailsEntity[];

  @OneToMany(
    () => OrderDetailsEntity,
    (orderDetailsEntity) => orderDetailsEntity.product,
  )
  @JoinColumn({ name: 'product_id' })
  orderDetails: OrderDetailsEntity[];

  @OneToMany(
    () => InvoiceDetailsEntity,
    (invoiceDetailsEntity) => invoiceDetailsEntity.product,
  )
  @JoinColumn({ name: 'product_id' })
  invoiceDetails: OrderDetailsEntity[];

  @ManyToMany(() => UserEntity, (userEntity) => userEntity.wishlist)
  users: UserEntity[];

  @ManyToOne(() => BrandEntity, (brandEntity) => brandEntity.products)
  @JoinColumn({ name: 'brand_id' })
  brand: BrandEntity;

  @OneToMany(
    () => PromotionEntity,
    (promotionEntity) => promotionEntity.product,
  )
  @JoinColumn({ name: 'product_id' })
  promotions: PromotionEntity[];

  @OneToMany(
    () => ProductReviewEntity,
    (productReviewEntity) => productReviewEntity.product,
  )
  @JoinColumn({ name: 'product_id' })
  productReviews: ProductReviewEntity[];

  @OneToMany(
    () => StockPurchaseEntity,
    (stockPurchaseEntity) => stockPurchaseEntity.product,
  )
  @JoinColumn({ name: 'product_id' })
  stockPurchases: StockPurchaseEntity[];

  @OneToMany(
    () => StockItemTransactionEntity,
    (stockItemTransactionEntity) => stockItemTransactionEntity.product,
  )
  @JoinColumn({ name: 'product_id' })
  stockItemTransactions: StockItemTransactionEntity[];

  @ManyToMany(() => CouponEntity, (couponEntity) => couponEntity.products)
  coupons: CouponEntity[];

  @OneToMany(() => CouponEntity, (couponEntity) => couponEntity.freeProduct)
  @JoinColumn({ name: 'product_id' })
  freeCoupons: CouponEntity[];

  @OneToMany(
    () => MerchantInvoiceDetailsEntity,
    (merchantInvoiceDetailsEntity) => merchantInvoiceDetailsEntity.product,
  )
  merchantInvoiceDetails: MerchantInvoiceDetailsEntity[];

  @OneToMany(
    () => ShopInvoiceDetailsEntity,
    (shopInvoiceDetailsEntity) => shopInvoiceDetailsEntity.product,
  )
  shopInvoiceDetails: ShopInvoiceDetailsEntity[];
}
