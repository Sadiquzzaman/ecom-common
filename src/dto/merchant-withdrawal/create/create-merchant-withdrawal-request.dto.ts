import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsNumber, IsString, IsUUID, Min } from 'class-validator';
import { BaseDto } from '../../core/base.dto';

export class CreateMerchantWithdrawalRequestDto extends BaseDto {
  @ApiProperty({
    description: 'requested withdrawal amount',
    required: true,
    default: 0,
  })
  @IsNumber()
  @Min(0)
  requestedAmount: string;

  @ApiProperty({
    description: 'bank details uui id',
    required: true,
    default: '123456789123456',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  bankDetailsId: string;
}
