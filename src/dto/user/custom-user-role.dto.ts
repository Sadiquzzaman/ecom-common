import { RoleName } from '../../enum/role-name.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CustomUserRoleDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsEnum(RoleName, { message: 'Must be a valid role' })
  role: RoleName;

  @ApiProperty()
  @IsOptional()
  @IsUUID('all', { message: 'Must be a valid shop ID' })
  shopId: string;
}
