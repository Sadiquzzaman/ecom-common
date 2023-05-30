import { BaseDto } from '../core/base.dto';
import { NoteDto } from '../core/note.dto';
import { RiskDto } from '../core/risk.dto';
import { Type } from 'class-transformer';

export class SupplierDto extends BaseDto {
  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => RiskDto)
  risk: RiskDto;
}
