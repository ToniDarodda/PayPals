import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TriCreateDTO {
  @ApiProperty({
    example: 'Hollydays',
    description: 'Name of the group',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
