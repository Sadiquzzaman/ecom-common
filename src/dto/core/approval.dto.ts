import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean } from 'class-validator';
import { BaseDto } from './base.dto';
import { IsUuidArray } from '../../functions/Is-uuid-array';

export class ApprovalDto extends BaseDto {
  @ApiProperty({
    isArray: true,
    required: true,
    default: ['b811ff77-814d-4a66-8a3e-ef37dd1e2878'],
  })
  @IsArray()
  @IsUuidArray()
  ids: string[];

  @ApiProperty({
    required: true,
    default: false,
  })
  @IsBoolean({ message: 'status must be a boolean' })
  status: boolean;
}
