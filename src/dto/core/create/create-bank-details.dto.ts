import { BankDetailsDto } from './../bank-details.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { BankDto } from './../bank.dto';

export class CreateBankDetailsDto extends BankDetailsDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Bank ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid Bank ID' })
  bankId: string;
}
