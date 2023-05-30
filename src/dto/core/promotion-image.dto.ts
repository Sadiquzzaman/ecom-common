import {IsEnum, IsInt} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
import {RedisImageDto} from './redis-image.dto';
import {PromotionType} from "../..";

export class PromotionImageDto extends RedisImageDto {
  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(PromotionType, { message: 'Must be either 1, 2 or 3' })
  type: PromotionType;

}
