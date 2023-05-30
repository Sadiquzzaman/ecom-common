import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, MaxLength } from 'class-validator';
import { ExcelColumnType } from '../../enum/excel-column-type.enum';

export class ExportExcelDetatilsDto {
  @ApiProperty({ default: 'Column name', required: true })
  @IsString({ message: 'Must be a string' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  header: string;

  @ApiProperty({ default: 'columnName', required: true })
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  key: string;

  @ApiProperty({ required: true, default: ExcelColumnType.STRING })
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  type: ExcelColumnType;

  @ApiProperty({ default: false, required: true })
  @IsBoolean({ message: 'Must be a boolen' })
  isCalulate: Boolean;
}
