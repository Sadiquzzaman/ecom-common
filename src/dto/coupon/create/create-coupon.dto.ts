import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, isUUID, IsUUID } from 'class-validator';
import { type } from 'os';
import { IsUuidArray } from '../../../functions/Is-uuid-array';
import { CouponDto } from '../coupon.dto';

export class CreateCouponDto extends CouponDto {
  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      '10d2b434-71c5-42e9-915f-a456f48952a1',
      'ef3925da-a4c9-4ca3-8232-e1aec3bb15f2',
      '01b616aa-a317-400e-8f0e-9c897cd6e6df',
    ],
  })
  @IsOptional({})
  @IsArray()
  @IsUuidArray()
  userIDs: string[];

  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      '2bf584cf-ed25-47dd-884d-2ccf1aa6673f',
      'dae50567-baf6-4628-a337-b0920fbbd508',
      '56093278-0a87-4ea3-89c4-1b1da24c5305',
    ],
  })
  @IsOptional()
  @IsArray()
  @IsUuidArray()
  shopIDs: string[];

  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      '92c5fb02-88f1-4ae0-a61c-1202a59d14f6',
      '55654919-092e-4881-a486-57fb5b2f7071',
      'ae1a0757-d654-433e-bcc2-185c6d97500d',
    ],
  })
  @IsOptional()
  @IsArray()
  @IsUuidArray()
  productIDs: string[];

  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      '5f6b05ee-c285-4101-af40-e1877f4fdcd7',
      'f89bde59-5b42-41c2-a6de-79609602531b',
    ],
  })
  @IsOptional()
  @IsArray()
  @IsUuidArray()
  categorieIDs: string[];

  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      '408818c1-f761-45c1-873d-3525789f9699',
      '048b8e8a-6e98-47a0-9a4d-928a9d0ceeb7',
    ],
  })
  @IsOptional()
  @IsArray()
  @IsUuidArray()
  thanasIDs: string[];

  @ApiProperty({
    isArray: true,
    required: false,
    default: 'dbc0b6e8-f857-4822-ba02-e4bfba3db21d',
  })
  @IsOptional()
  @IsUUID()
  freeProductID: string;

  @ApiProperty({
    isArray: true,
    required: false,
    default: 'd3b06546-fc3c-4df4-b258-6f92de849740',
  })
  @IsOptional()
  @IsUUID()
  freeProductAttributeID: string;
}
