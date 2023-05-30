import { PromotionEntity } from '../../shop/promotion.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { InvoiceStatus } from '../../../enum/invoice-status.enum';
import { PromotionType } from '../../../enum/promotion-type.enum';
import { CustomBaseEntity } from '../../core/custom-base.entity';
import { MerchantEntity } from '../../user/merchant.entity';
import { UserEntity } from '../../user/user.entity';

@Entity({ name: 'promotion_invoice', schema: 'public' })
export class PromotionInvoiceEntity extends CustomBaseEntity {
    @Column({
        type: 'date',
        name: 'start_date',
        nullable: false,
    })
    startDate: Date | null;

    @Column({
        type: 'date',
        name: 'end_date',
        nullable: false,
    })
    endDate: Date | null;

    @Column({
        type: 'enum',
        name: 'promotion_type',
        enum: PromotionType,
        default: `${PromotionType.Banner}`,
        nullable: false,
    })
    promotionType: PromotionType;

    @Column({
        type: 'enum',
        name: 'payment_status',
        enum: InvoiceStatus,
        default: `${InvoiceStatus.UNPAID}`,
        nullable: false,
    })
    paymentStatus: InvoiceStatus;

    @Column({ type: 'decimal', name: 'amount', nullable: false })
    amount: number;

    @Column({ type: 'varchar', name: 'trnxId', length: 100, nullable: false })
    trnxId: string;

    @ManyToOne(() => UserEntity, (userEntity) => userEntity.reviews)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @ManyToOne(
        () => MerchantEntity,
        (merchantEntity) => merchantEntity.promotion,
    )
    @JoinColumn({ name: 'merchant_id' })
    merchant: MerchantEntity;

    @OneToOne(() => PromotionEntity)
    @JoinColumn({ name: 'promotion_id' })
    promotion: PromotionEntity;
}
