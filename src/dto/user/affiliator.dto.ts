import { BaseDto } from '../core/base.dto';
import { NoteDto } from '../core/note.dto';
import { RiskDto } from '../core/risk.dto';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class AffiliatorDto extends BaseDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Should be a number' })
  baseFee: number;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Should be a number' })
  percentFee: number;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Should be a number' })
  clickFee: number;

  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => RiskDto)
  risk: RiskDto;

  @Type(() => UserDto)
  user: UserDto;
}
