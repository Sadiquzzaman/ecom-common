import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { UserEntity } from '../user/user.entity';
import { ShopEntity } from './shop.entity';

@Entity({ name: 'shop_reviews', schema: 'public' })
export class ShopReviewEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'shop_review', length: 500 })
  shopReview: string;

  @Column({ type: 'float', name: 'shop_rating' })
  shopRating: number;

  @ManyToOne(() => ShopEntity, (shopEntity) => shopEntity.reviews)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.reviews)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
