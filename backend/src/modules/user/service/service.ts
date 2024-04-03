import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../../entities/user/entity';
import { UserCreateDTO } from '../dto/create';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(elementsUser: UserCreateDTO): Promise<User> {
    try {
      return this.usersRepository.save(
        this.usersRepository.create(elementsUser),
      );
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
