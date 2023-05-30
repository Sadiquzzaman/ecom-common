import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateIf } from 'class-validator';
import { NoteDto } from '../note.dto';

export class CreateNoteDto extends NoteDto {
  @ApiProperty()
  @ValidateIf((o) => !o.customerID && !o.employeeID)
  @IsNotEmpty({ message: 'Affiliator ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid affiliator ID' })
  affiliatorID: string;

  @ApiProperty()
  @ValidateIf((o) => !o.affiliatorID && !o.employeeID)
  @IsNotEmpty({ message: 'Customer ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid customer ID' })
  customerID: string;

  @ApiProperty()
  @ValidateIf((o) => !o.customerID && !o.affiliatorID)
  @IsNotEmpty({ message: 'Employee ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid employee ID' })
  employeeID: string;
}
