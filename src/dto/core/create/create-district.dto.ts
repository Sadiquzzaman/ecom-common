import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { DistrictDto } from '../district.dto';

export class CreateDistrictDto extends DistrictDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'State ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid state ID' })
  stateID: string;
}
