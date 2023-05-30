import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { ActiveStatus } from '../../enum/active.enum';
import { BaseDto } from '../core/base.dto';
import { NoteDto } from '../core/note.dto';
import { RiskDto } from '../core/risk.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { ShopInvoiceDto } from '../payment/invoice/shop-invoice.dto';
import { ProductDto } from '../product/product.dto';
import { PromotionDto } from '../shop/promotion.dto';
import { ShopDto } from '../shop/shop.dto';
import { MerchantBankDetailsDto } from './merchant-bank-details.dto';
import { UserDto } from './user.dto';

export class MerchantDto extends BaseDto {
  @Type(() => ShopDto)
  shops: ShopDto[];

  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => RiskDto)
  risk: RiskDto;

  @Type(() => ShopInvoiceDto)
  shopInvoice: ShopInvoiceDto[];

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => ProductDto)
  products: ProductDto[];

  @Type(() => PromotionDto)
  promotions: PromotionDto[];

  @Type(() => MerchantBankDetailsDto)
  merchantBankDetails: MerchantBankDetailsDto[];

  @IsOptional()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(ActiveStatus, { message: 'Can be either 0 or 1' })
  isApproved: ActiveStatus;

  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  approvedBy: string | null;

  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  approvedAt: Date | null;
}

export class MerchantSearchDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    required: false,
    default: '1',
    enum: ['0', '1'],
  })
  @IsOptional()
  @IsString()
  isApproved: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  firstName: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  phone: string;
}
