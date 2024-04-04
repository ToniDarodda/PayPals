import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tri } from '../../../entities/tri/entity';
import { TriCreateDTO } from '../dto/create';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../../user/service/service';
import { User } from '../../../entities/user/entity';

@Injectable()
export class TriService {
  constructor(
    @InjectRepository(Tri) private readonly triRepository: Repository<Tri>,
    private readonly userService: UserService,
  ) {}

  async createTri(userId: string, elementsTri: TriCreateDTO): Promise<Tri> {
    try {
      const user: User = await this.userService.getUserById(userId);
      const tri = new Tri();
      tri.name = elementsTri.name;
      tri.owner = user;
      return this.triRepository.save(this.triRepository.create(tri));
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
