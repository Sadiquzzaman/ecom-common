import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class AddUserRoleDto {
  @ApiProperty()
  @IsUUID()
  roleId: string;
}
