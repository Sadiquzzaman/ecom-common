import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PromotionStatus } from '../../enum/promotion-status.enum';
import { PromotionType } from '../../enum/promotion-type.enum';
import { CategoryEntity } from '../category/category.entity';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ProductEntity } from '../product/product.entity';
import { ShopTypeEntity } from '../shop/shop-type.entity';
import { MerchantEntity } from '../user/merchant.entity';
import { UserEntity } from '../user/user.entity';
import { ActiveStatus } from './../../enum/active.enum';
import { PromotionsSlotEntity } from './promotions-slot.entity';
import { ShopEntity } from './shop.entity';

@Entity({ name: 'promotions', schema: 'public' })
export class PromotionEntity extends CustomBaseEntity {
  @Column({
    type: 'date',
    name: 'start_date',
    nullable: true,
  })
  startDate: Date | null;

  @Column({
    type: 'date',
    name: 'end_date',
    nullable: true,
  })
  endDate: Date | null;

  @Column({
    type: 'enum',
    enum: ActiveStatus,
    name: 'is_approved',
    default: `${ActiveStatus.disabled}`,
    nullable: true,
  })
  isApproved: ActiveStatus;

  @Column({ type: 'varchar', name: 'title', length: 100 })
  title: string;

  @Column({ type: 'varchar', name: 'description', length: 200 })
  description: string;

  @Column({
    type: 'varchar',
    name: 'promotion_cover_image',
    length: 200,
    nullable: true,
  })
  promotionCoverImage: string;

  // @Column({ type: 'varchar', name: 'titleColor', length: 30, nullable: true })
  // titleColor: string;

  // @Column({
  //   type: 'varchar',
  //   name: 'descriptionColor',
  //   length: 30,
  //   nullable: true,
  // })
  // descriptionColor: string;

  @Column({
    type: 'enum',
    name: 'type',
    enum: PromotionType,
    default: `${PromotionType.Banner}`,
  })
  type: PromotionType;

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

  @Column({ type: 'decimal', name: 'amount', nullable: true })
  amount: number;

  @Column({ type: 'varchar', name: 'trnxId', length: 100, nullable: true })
  trnxId: string;

  @Column({
    type: 'enum',
    name: 'promotion_status',
    enum: PromotionStatus,
    default: `${PromotionStatus.DRAFT}`,
    nullable: true,
  })
  promotionStatus: PromotionStatus;

  @ManyToOne(() => ShopEntity, (shopEntity) => shopEntity.reviews)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.promotions)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
    () => ShopTypeEntity,
    (shopTypeEntity) => shopTypeEntity.promotions,
  )
  @JoinColumn({ name: 'shop_type_id' })
  shopType: ShopTypeEntity;

  @ManyToOne(
    () => CategoryEntity,
    (categoryEntity) => categoryEntity.promotions,
  )
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.reviews)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => MerchantEntity, (merchantEntity) => merchantEntity.promotion)
  @JoinColumn({ name: 'merchant_id' })
  merchant: MerchantEntity;

  @ManyToOne(
    () => PromotionsSlotEntity,
    (promotionSlot) => promotionSlot.promotion,
  )
  @JoinColumn({ name: 'promotion_slot_id' })
  prmotionSlot: PromotionsSlotEntity;
}
