import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';
import { BaseDto } from '../../core/base.dto';

export class CreateCouponUsageDto {
  @ApiProperty({
    required: true,
    default: '01b616aa-a317-400e-8f0e-9c897cd6e6df',
    type: 'string',
  })
  @IsString()
  @IsUUID()
  userID: string;

  @ApiProperty({
    required: true,
    default: '01b616aa-a317-400e-8f0e-9c897cd6e6df',
    type: 'string',
  })
  @IsString()
  @IsUUID()
  couponID: string;
}
