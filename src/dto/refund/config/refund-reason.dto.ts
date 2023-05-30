import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { BaseDto } from '../../core/base.dto';

export class RefundReasonDto extends BaseDto {
  @ApiProperty({
    default: 'Item is defective or not workin',
    description: 'Reason Title',
    required: true,
  })
  @IsNotEmpty({ message: 'Name must be defined!' })
  @IsString({ message: 'Name must be string!' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  name: string;

  @ApiProperty({
    default: 'Item is defective or not workin',
    description: 'Reason Description',
    required: true,
  })
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  description: string;
}
