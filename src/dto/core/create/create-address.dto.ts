import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { AddressDto } from '../address.dto';

export class CreateAddressDto extends AddressDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'District ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid district ID' })
  districtId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Thana ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid thana ID' })
  thanaId: string;
}
