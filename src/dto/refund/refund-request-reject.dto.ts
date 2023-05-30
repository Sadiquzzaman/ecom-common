import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { RefundStep } from '../../enum/refund-step.enum';
import { BaseDto } from '../core/base.dto';

export class RefundRequestRejectDto extends BaseDto {
  @ApiProperty({
    description: 'refund request review step',
    required: true,
    default: RefundStep.REVIEW,
    enum: ['0', '1'],
  })
  @IsEnum(RefundStep)
  step: number;
}
