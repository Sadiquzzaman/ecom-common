import { BaseDto } from '../core/base.dto';
import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProfileDto extends BaseDto {
  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  coverImageUrl: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  profileImageUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  title: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  description: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  presentAddress: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  permanentAddress: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  companyAddress: string;
}
