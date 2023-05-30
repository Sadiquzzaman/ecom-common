import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';
import { ActiveStatus } from '../../../enum/active.enum';
import { UserType } from '../../../enum/user-type.enum';
import { ApiQueryPaginationBaseDTO } from '../../pagination/api-query-pagination-base.dto';
import { UserDto } from '../user.dto';

export class CreateUserDto extends UserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsEnum(UserType, { message: 'Must be a valid user type [1-9]' })
  type: UserType;

  @ApiProperty()
  @IsOptional()
  @IsUUID('all', { message: 'Must be a valid district ID' })
  district: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID('all', { message: 'Must be a valid thana ID' })
  thana: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be string' })
  addressPlain: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'profileImageUrl must be a string' })
  profileImageUrl: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  captcha: string;
}

export class UserSearchFilterDto extends ApiQueryPaginationBaseDTO {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  name: String;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  email: String;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  phone: String;

  @ApiProperty({
    required: false,
    type: Array,
  })
  @IsOptional()
  @IsArray()
  label: String[];

  @ApiProperty({
    description: 'refund request review step',
    required: true,
    default: ActiveStatus.enabled,
    enum: ['0', '1'],
  })
  @IsEnum(ActiveStatus)
  approveStatus: ActiveStatus;
}
