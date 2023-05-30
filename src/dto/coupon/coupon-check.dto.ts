import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CouponCheckDto {
  @ApiProperty({ default: 'EID2021', required: true, type: 'string' })
  @IsNotEmpty({ message: 'coupnCode must be defined' })
  @IsString({ message: 'coupnCode must be String' })
  coupnCode: string;

  @ApiProperty({
    default: '1dffa3ef-026c-45df-b4f9-dbe4e24527b7',
    required: true,
    type: 'string',
  })
  @IsNotEmpty({ message: 'coupnCode must be defined' })
  @IsString({ message: 'coupnCode must be String' })
  cartId: string;
}
