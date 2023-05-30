import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ShopEntity } from './shop.entity';
import { PromotionEntity } from './promotion.entity';

@Entity({ name: 'shop_types', schema: 'public' })
export class ShopTypeEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 64, nullable: false })
  @Index('shop-type-name-idx', { unique: true })
  name: string;

  @Column({ type: 'varchar', name: 'description', length: 150, nullable: true })
  description: string;

  @Column({
    type: 'varchar',
    name: 'image',
    length: 200,
    nullable: true,
  })
  image: string;

  @Column({
    type: 'decimal',
    name: 'commission',
    nullable: false,
    default: () => '0',
  })
  commission: number;

  @OneToMany(() => ShopEntity, (shopEntity) => shopEntity.shopType)
  @JoinColumn({ name: 'shop_type_id' })
  shops: ShopEntity[];

  @OneToMany(
    () => PromotionEntity,
    (promotionEntity) => promotionEntity.shopType,
  )
  @JoinColumn({ name: 'shop_type_id' })
  promotions: PromotionEntity[];
}
