import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
import { UserDto } from '../user/user.dto';
import { TicketStatus } from './../../enum/ticket-status.enum';
import { BaseDto } from './base.dto';
import { TicketDepartmentDto } from './ticket-department.dto';

export class TicketDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  subject: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(600, { message: 'Maximum 600 character supported' })
  issueDetails: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(TicketStatus, { message: 'Must be a valid status [0-2]' })
  status: TicketStatus;

  @Type(() => TicketDepartmentDto)
  ticketDepartment: TicketDepartmentDto;

  @Type(() => UserDto)
  user: UserDto;
}

export class TicketPaginationSearchFilter extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  phone: String;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsString()
  ticketNo: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  departmentID: String;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  fromDate: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  toDate: string;

  @ApiProperty({
    description: 'ticket status',
    required: false,
    default: TicketStatus.OnHold,
    enum: ['0', '1', '2'],
  })
  @IsEnum(TicketStatus)
  ticketStatus: TicketStatus;
}
