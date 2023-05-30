import { Type } from 'class-transformer';
import {
    IsDateString,
    IsDecimal,
    IsEnum,
    IsString,
    MaxLength,
    Min
} from 'class-validator';
import { InvoiceStatus } from '../../../enum/invoice-status.enum';
import { PromotionType } from '../../../enum/promotion-type.enum';
import { BaseDto } from '../../core/base.dto';
import { PromotionDto } from '../../shop/promotion.dto';
import { MerchantDto } from '../../user/merchant.dto';
import { UserDto } from '../../user/user.dto';

export class PromotionInvoiceDto extends BaseDto {
    @IsDateString()
    startDate: Date | null;

    @IsDateString()
    endDate: Date | null;

    @IsEnum(PromotionType)
    promotionType: PromotionType;

    @IsEnum(InvoiceStatus)
    paymentStatus: InvoiceStatus;

    @IsDecimal()
    @Min(0)
    amount: number;

    @IsString()
    @MaxLength(100)
    trnxId: string;

    @Type(() => UserDto)
    user: UserDto;

    @Type(() => MerchantDto)
    merchant: MerchantDto;

    @Type(() => PromotionDto)
    promotion: PromotionDto;
}
