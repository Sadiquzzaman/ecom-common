import { BaseDto } from './base.dto';
import { MerchantDto } from '../user/merchant.dto';
import { AffiliatorDto } from '../user/affiliator.dto';
import { CustomerDto } from '../user/customer.dto';
import { SupplierDto } from '../user/supplier.dto';
import { EmployeeDto } from '../user/employee.dto';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { AdminDto } from '../user/admin.dto';

export class NoteDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  note: string;

  @Type(() => MerchantDto)
  merchant: MerchantDto;

  @Type(() => AdminDto)
  admin: AdminDto;

  @Type(() => AffiliatorDto)
  affiliator: AffiliatorDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @Type(() => EmployeeDto)
  employee: EmployeeDto;

  @Type(() => SupplierDto)
  supplier: SupplierDto;
}
