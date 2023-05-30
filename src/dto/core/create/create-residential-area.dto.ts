import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { ResidentialAreaDto } from '../residential-area.dto';

export class CreateResidentialAreaDto extends ResidentialAreaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Thana ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid thana ID' })
  thanaID: string;
}
