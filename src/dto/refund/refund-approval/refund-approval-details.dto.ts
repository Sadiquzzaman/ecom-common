import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';
import { BaseDto } from '../../core/base.dto';
import { ProductAttributeDto } from '../../product/product-attribute.dto';
import { ProductDto } from '../../product/product.dto';
import { RefundApprovalDto } from './refund-approval.dto';

export class RefundApprovalDetailsDto extends BaseDto {
  @Type(() => RefundApprovalDto)
  refundApproval: RefundApprovalDto;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttributes: ProductAttributeDto;

  @IsString()
  @MaxLength(200)
  refundReason: String;

  @IsNotEmpty()
  @IsInt({ message: 'Quantity should be an integer!' })
  @Min(1)
  quantity: number;
}
