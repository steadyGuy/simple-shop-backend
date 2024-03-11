import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsPhoneNumber()
  @ApiProperty()
  phone: string;

  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @ArrayNotEmpty()
  @ApiProperty()
  products: { id: number; quantity: number }[];
}
