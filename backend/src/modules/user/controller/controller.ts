import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../service/service';
import { User } from '../../../entities/user/entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { UserCreateDTO } from '../dto/create';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiBody({ type: UserCreateDTO })
  @ApiCreatedResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Error to handle the request' })
  @ApiConflictResponse({ description: 'User already exist' })
  createUser(@Body() elementsUser: UserCreateDTO): Promise<User> {
    return this.userService.createUser(elementsUser);
  }
}
