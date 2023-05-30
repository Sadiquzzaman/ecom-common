import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class GoogleSignInDto {
  @ApiProperty({
    required: true,
    default: 'devraju.bd@gmail.com',
  })
  @IsNotEmpty()
  @IsString({ message: 'email must be a string' })
  email: string;

  @ApiProperty({
    required: false,
    default: 'Raju Rayhan',
  })
  @IsOptional()
  @IsString({ message: 'full name must be a string' })
  fullName: string;

  @ApiProperty({
    required: true,
    default: 'Raju',
  })
  @IsNotEmpty()
  @IsString({ message: 'first name be a string' })
  firstName: string;

  @ApiProperty({
    required: true,
    default: 'Rayhan',
  })
  @IsNotEmpty()
  @IsString({ message: 'last name must be a string' })
  lastName: string;

  @ApiProperty({
    required: true,
    default:
      'https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/271646735_4992570614134765_241523354317063682_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFMmV5uSeZpAabcdIP-hoPArYkIldnW9DGtiQiV2db0MSa1rbOfYcagJARVjjynwZsoOevP27PkZGqKCdGmsQEC&_nc_ohc=ZMqOQQT_ZWYAX_00kGk&_nc_ht=scontent.fdac31-1.fna&oh=00_AT8Hr9P5915gxYBiT2I1KLJCOq-aDWRw_02yDgQ4PqR3fg&oe=61FF9EB8',
  })
  @IsNotEmpty()
  @IsString({ message: 'image url must be a string' })
  profileImageUrl: string;
}
