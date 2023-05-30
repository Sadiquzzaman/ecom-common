import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryOtpDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Transporter Assignment Id' })
  @IsUUID('all', { message: 'Must be a valid Transporter Assignment ID' })
  transporterAssignmentId: string;
}
