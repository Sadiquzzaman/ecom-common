import { EmployeeType } from './../../enum/employee-type.enum';
import { BaseDto } from '../core/base.dto';
import { NoteDto } from '../core/note.dto';
import { RiskDto } from '../core/risk.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { UserDto } from './user.dto';
import { AdminDto } from './admin.dto';

export class EmployeeDto extends BaseDto {
  @ApiProperty()
  @IsOptional()
  @IsEnum(EmployeeType, { message: 'Must be a valid employeeType [1-2]' })
  employeeType: EmployeeType;

  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => AdminDto)
  admin: AdminDto;

  @Type(() => RiskDto)
  risk: RiskDto;

  @Type(() => UserDto)
  user: UserDto;
}
