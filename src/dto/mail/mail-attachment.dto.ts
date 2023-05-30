import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class MailAttachmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  filename: string;

  @ApiProperty()
  @IsOptional()
  path?: string;

  @ApiProperty()
  @IsOptional()
  content?: string;

  @ApiProperty()
  @IsOptional()
  encoding?: string;

  @ApiProperty()
  @IsOptional()
  contentType?: string;

  @ApiProperty()
  @IsOptional()
  raw?: string;
}
