import { Module } from '@nestjs/common';
import { UserController } from './controller/controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user/entity';
import { UserService } from './service/service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
