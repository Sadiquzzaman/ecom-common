import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { ActiveStatus } from '../../enum/active.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';
import { MarchantInvoiceEntity } from '../payment/invoice/marchant-invoice.entity';
import { ShopInvoiceEntity } from '../payment/invoice/shop-invoice.entity';
import { ProductEntity } from '../product/product.entity';
import { ShopEntity } from '../shop/shop.entity';
import { BankDetailsEntity } from './../core/bank-details.entity';
import { PromotionEntity } from './../shop/promotion.entity';
import { UserEntity } from './user.entity';
@Entity({ name: 'merchants', schema: 'public' })
export class MerchantEntity extends CustomBaseEntity {
  @OneToMany(() => ShopEntity, (shopEntity) => shopEntity.merchant)
  @JoinColumn({ name: 'merchant_id' })
  shops: ShopEntity[];

  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.merchant)
  @JoinColumn({ name: 'merchant_id' })
  notes: NoteEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;

  @OneToMany(
    () => MarchantInvoiceEntity,
    (MarchantInvoiceEntity) => MarchantInvoiceEntity.merchant,
  )
  marchentInvoices: MarchantInvoiceEntity[];

  @OneToMany(
    () => ShopInvoiceEntity,
    (shopInvoiceEntity) => shopInvoiceEntity.merchant,
  )
  shopInvoices: ShopInvoiceEntity[];

  @OneToOne(() => UserEntity, (userEntity) => userEntity.merchant)
  user: UserEntity;

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.merchant)
  @JoinColumn({ name: 'merchant_id' })
  products: ProductEntity[];

  @OneToMany(
    () => PromotionEntity,
    (promotionEntity) => promotionEntity.merchant,
  )
  @JoinColumn({ name: 'merchant_id' })
  promotion: PromotionEntity[];

  @Column({
    type: 'enum',
    enum: ActiveStatus,
    name: 'is_approved',
    default: `${ActiveStatus.disabled}`,
  })
  isApproved: ActiveStatus;

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

  @OneToMany(
    () => BankDetailsEntity,
    (bankDetailsEntity) => bankDetailsEntity.merchant,
  )
  @JoinColumn({ name: 'merchant_id' })
  merchantBankDetails: BankDetailsEntity[];
}
