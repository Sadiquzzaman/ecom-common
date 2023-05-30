import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsUUID, ValidateIf } from 'class-validator';
import { PromotionType } from '../../../enum/promotion-type.enum';
import { PromotionDto } from '../promotion.dto';

export class CreatePromotionDto extends PromotionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsEnum(PromotionType, { message: 'Must be a valid user type [1-3]' })
  type: PromotionType;

  @ApiProperty()
  @ValidateIf((o) => o.type === PromotionType.Shop)
  @IsNotEmpty({ message: 'Shop ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid shop ID' })
  shopID: string;

  @ApiProperty()
  @ValidateIf((o) => o.type === PromotionType.Product)
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid product ID' })
  productID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Merchant ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid merchant ID' })
  merchantId: string;
}
