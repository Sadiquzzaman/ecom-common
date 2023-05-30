import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { ThanaDto } from '../thana.dto';

export class CreateThanaDto extends ThanaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'District ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid district ID' })
  districtID: string;
}
