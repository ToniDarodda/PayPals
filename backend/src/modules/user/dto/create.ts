import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserCreateDTO {
  @ApiProperty({ example: 'John', description: 'The first name of the User' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'daroda', description: 'The last name of the User' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'john@gmail.com', description: 'The email of User' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '123456789',
    description: 'The phone number of User',
  })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}
