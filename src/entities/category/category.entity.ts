import {
  Column,
  Entity,
  JoinColumn, ManyToMany,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { Bool } from '../../enum/bool.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ProductEntity } from '../product/product.entity';
import { PromotionEntity } from '../shop/promotion.entity';
import { CouponEntity } from '../coupon/coupon.entity';

@Entity({ name: 'categories', schema: 'public' })
@Tree('materialized-path')
export class CategoryEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 128 })
  name: string;

  @Column({ type: 'text', name: 'description' })
  description: string;

  @Column({
    type: 'int',
    name: 'position',
    unsigned: true,
  })
  position: number;

  @Column({
    type: 'enum',
    name: 'is_root_category',
    enum: Bool,
    default: `${Bool.No}`,
  })
  isRootCategory: Bool;

  @Column({
    type: 'varchar',
    name: 'image',
    length: 200,
    nullable: true,
  })
  image: string;

  @TreeChildren()
  children: CategoryEntity[];

  @TreeParent()
  parent: CategoryEntity;

  @OneToMany(() => ProductEntity, (product) => product.category)
  @JoinColumn({ name: 'product_id' })
  products: ProductEntity[];

  @OneToMany(
    () => PromotionEntity,
    (promotionEntity) => promotionEntity.category,
  )
  @JoinColumn({ name: 'category_id' })
  promotions: PromotionEntity[];

  @ManyToMany(
      () => CouponEntity,
      (couponEntity) => couponEntity.categories,
  )
  coupons: CouponEntity[];
}
