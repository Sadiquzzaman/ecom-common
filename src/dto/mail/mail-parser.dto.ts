import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Readable } from 'stream';
import { MailAttachmentDto } from './mail-attachment.dto';
import { MailFromDto } from './mail-from.dto';

export class MailParserDto {
  @ApiProperty({ type: MailFromDto })
  @ValidateNested({ each: true })
  from: MailFromDto;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  to: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  subject: string;

  @ApiProperty()
  @IsOptional()
  html: string | Buffer | Readable;

  @ApiProperty({ type: MailAttachmentDto })
  @IsOptional()
  attachments: MailAttachmentDto[];
}
