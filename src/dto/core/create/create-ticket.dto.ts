import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { TicketDto } from '../ticket.dto';

export class CreateTicketDto extends TicketDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Department ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid department ID' })
  departmentId: string;
}
