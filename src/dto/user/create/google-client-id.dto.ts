import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GoogleClientIdDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'idToken is not empty' })
  @IsString({ message: 'idToken must be string' })
  idToken: string;
}
