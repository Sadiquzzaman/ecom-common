import { PromotionType } from '../../enum/promotion-type.enum';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CustomBaseEntity, PromotionEntity } from '../entities.config';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';

@Entity({ name: 'promotions_slot', schema: 'public' })
export class PromotionsSlotEntity extends CustomBaseEntity {
  @Index('promotions_slot-title-idx', {unique: true})
  @Column({ name: 'title', type: 'varchar', nullable: false })
  title: string;

  @Column({
    name: 'daily_charge',
    type: 'integer',
    nullable: false,
    transformer: new StringToNumericTransformer(),
  })
  dailyCharge: number;

  @Column({
    name: 'promotion_type',
    enum: PromotionType,
    default: `${PromotionType.Shop}`,
  })
  promotionType: PromotionType;

  @Column({
    name: 'limit',
    type: 'decimal',
    nullable: false,
    transformer: new StringToNumericTransformer(),
  })
  limit: number;

  @OneToMany(() => PromotionEntity, (promotion) => promotion.prmotionSlot)
  promotion: PromotionEntity;
}
