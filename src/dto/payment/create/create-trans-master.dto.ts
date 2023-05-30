import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { TransMasterDto } from '../trans-master.dto';

export class CreateTransMasterDto extends TransMasterDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Invoice ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid invoice ID' })
  invoiceID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'User ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid user ID' })
  userID: string;
}
