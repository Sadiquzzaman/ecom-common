import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { UserEntity } from '../user/user.entity';
import { ProductEntity } from './product.entity';

@Entity({ name: 'product_reviews', schema: 'public' })
export class ProductReviewEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'product_review', length: 500 })
  productReview: string;

  @Column({ type: 'float', name: 'product_rating' })
  productRating: number;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.productReviews)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.productReviews)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
