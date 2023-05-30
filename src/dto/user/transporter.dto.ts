import { BaseDto } from '../core/base.dto';
import { NoteDto } from '../core/note.dto';
import { RiskDto } from '../core/risk.dto';
import { Type } from 'class-transformer';
import { UserDto } from './user.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class TransporterDto extends BaseDto {
  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => RiskDto)
  risk: RiskDto;

  @Type(() => UserDto)
  user: UserDto;
}

export class TransporterSearchDto extends ApiQueryPaginationBaseDTO {
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
