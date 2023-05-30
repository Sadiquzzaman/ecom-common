import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { TicketStatus } from '../../enum/ticket-status.enum';

export class ChangeTicketStatusDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Ticket ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid ticket ID' })
  ticketId: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(TicketStatus, { message: 'Must be a valid ticket status [0-2]' })
  status: TicketStatus;
}
