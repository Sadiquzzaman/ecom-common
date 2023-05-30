import { CountryDto } from '../country.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCountryDto extends CountryDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Currency ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid currency ID' })
  currencyID: string;
}
