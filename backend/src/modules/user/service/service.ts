import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../../entities/user/entity';
import { UserCreateDTO } from '../dto/create';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(elementsUser: UserCreateDTO): Promise<User> {
    try {
      return this.userRepository.save(this.userRepository.create(elementsUser));
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getUserById(userId: string): Promise<User> {
    try {
      return await this.userRepository.findOne({ where: { id: userId } });
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
