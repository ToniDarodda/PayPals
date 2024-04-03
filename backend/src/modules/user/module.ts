import { Module } from '@nestjs/common';
import { UserController } from './controller/controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user/entity';
import { UsersService } from './service/service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService],
})
export class UserModule {}
