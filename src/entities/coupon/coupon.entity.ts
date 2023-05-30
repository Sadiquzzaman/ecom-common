import { CustomBaseEntity } from '../core/custom-base.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CouponUsageEntity } from './coupon-usage.entity';
import { UserEntity } from '../user/user.entity';
import { ShopEntity } from '../shop/shop.entity';
import { ProductEntity } from '../product/product.entity';
import { ThanaEntity } from '../core/thana.entity';
import { ProductAttributeEntity } from '../product/product-attribute.entity';
import { CategoryEntity } from '../category/category.entity';
import { CartEntity } from '../cart/cart.entity';
import { OrderEntity } from '../order/order.entity';

@Entity({ name: 'coupons', schema: 'public' })
export class CouponEntity extends CustomBaseEntity {
  @Column({
    type: 'timestamp without time zone',
    name: 'start_date',
    default: new Date(),
    nullable: true,
  })
  startDate: Date | null;

  @Column({
    type: 'timestamp without time zone',
    name: 'end_date',
    default: new Date(),
    nullable: true,
  })
  endDate: Date | null;

  @Column({
    type: 'varchar',
    name: 'description',
    length: 250,
    nullable: false,
  })
  description: string;

  @Column({ type: 'int', name: 'quantity', nullable: false })
  quantity: number;

  @Column({ type: 'int', name: 'quantity_per_user', nullable: false })
  quantityPerUser: number;

  @Column({ type: 'int', name: 'priority', nullable: false })
  priority: number;

  @Column({
    type: 'varchar',
    name: 'coupon_code',
    length: 100,
    nullable: false,
  })
  @Index('coupon couponCode-idx', { unique: true })
  couponCode: string;

  @Column({ type: 'decimal', name: 'minimum_amount', nullable: false })
  minimumAmount: number;

  @Column({ type: 'decimal', name: 'reduction_percent', nullable: false })
  reductionPercent: number;

  @Column({ type: 'decimal', name: 'reduction_amount', nullable: false })
  reductionAmount: number;

  @ManyToMany(() => UserEntity, (userEntity) => userEntity.coupons)
  @JoinTable({
    name: 'coupon_user_relations',
    joinColumn: {
      name: 'coupon_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  users: UserEntity[];

  @ManyToMany(() => ShopEntity, (shopEntity) => shopEntity.coupons)
  @JoinTable({
    name: 'coupon_shop_relations',
    joinColumn: {
      name: 'coupon_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'shop_id',
      referencedColumnName: 'id',
    },
  })
  shops: ShopEntity[];

  @ManyToMany(() => ProductEntity, (productEntity) => productEntity.coupons)
  @JoinTable({
    name: 'coupon_product_relations',
    joinColumn: {
      name: 'coupon_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  products: ProductEntity[];

  @ManyToMany(() => CategoryEntity, (categoryEntity) => categoryEntity.coupons)
  @JoinTable({
    name: 'coupon_category_relations',
    joinColumn: {
      name: 'coupon_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  categories: CategoryEntity[];

  @ManyToMany(() => ThanaEntity, (thanaEntity) => thanaEntity.coupons)
  @JoinTable({
    name: 'coupon_thana_relations',
    joinColumn: {
      name: 'coupon_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'thana_id',
      referencedColumnName: 'id',
    },
  })
  thanas: ThanaEntity[];

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.freeCoupons)
  @JoinColumn({ name: 'product_id' })
  freeProduct: ProductEntity;

  @ManyToOne(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.freeCoupons,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  freeProductAttribute: ProductAttributeEntity;

  @OneToMany(
    () => CouponUsageEntity,
    (couponUsageEntity) => couponUsageEntity.coupon,
  )
  @JoinColumn({ name: 'coupon_id' })
  couponUsages: CouponUsageEntity[];

  @OneToMany(() => CartEntity, (cartEntity) => cartEntity.coupon)
  @JoinColumn({ name: 'coupon_id' })
  carts: CartEntity[];

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.coupon)
  @JoinColumn({ name: 'coupon_id' })
  orders: OrderEntity[];
}
