import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { StateDto } from '../state.dto';

export class CreateStateDto extends StateDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Country ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid country ID' })
  countryID: string;
}
