import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { ExportExcelDetatilsDto } from './export-excel-detatils.dto';

export class ExportExcelDto extends BaseDto {
  @ApiProperty({
    isArray: true,
    required: true,
    default: [
      {
        header: 'Serial',
        key: 'serial',
        type: 'string',
        isCalulate: false,
      },
    ],
  })
  @IsArray()
  @Type(() => ExportExcelDetatilsDto)
  @ValidateNested({ each: true })
  headers: ExportExcelDetatilsDto[];

  @ApiProperty({
    isArray: true,
    required: true,
    default: [
      {
        serial: 'Serial',
      },
    ],
  })
  @IsArray()
  rows: Object[];
}
