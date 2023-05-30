import { BaseDto } from '../core/base.dto';
import { NoteDto } from '../core/note.dto';
import { RiskDto } from '../core/risk.dto';
import { Type } from 'class-transformer';
import { UserDto } from './user.dto';
import { EmployeeDto } from './employee.dto';
import { ShopDto } from '../shop/shop.dto';
import { IsOptional } from 'class-validator';

export class ShopManagerDto extends BaseDto {
  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => EmployeeDto)
  employee: EmployeeDto[];

  @Type(() => RiskDto)
  risk: RiskDto;

  @Type(() => UserDto)
  user: UserDto;

  @IsOptional()
  @Type(() => ShopDto)
  shops: ShopDto[];
}
