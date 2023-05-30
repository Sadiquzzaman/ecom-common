import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { NotificationStatus } from '../../enum/notification.enum';

import { BaseDto } from '../core/base.dto';
import { Type } from 'class-transformer';
import { UserDto } from '../user/user.dto';

export class NotificationDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(NotificationStatus, { message: 'Can be either read or unread' })
  status: NotificationStatus;

  @ApiProperty()
  @IsNotEmpty({ message: 'message can not be empty' })
  @IsString()
  message: string;

  @Type(() => UserDto)
  user: UserDto;
}
