import { Module } from '@nestjs/common';
import { TriController } from './controller/controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tri } from 'src/entities/tri/entity';
import { TriService } from './service/service';
import { UserModule } from '../user/module';

@Module({
  imports: [TypeOrmModule.forFeature([Tri]), UserModule],
  controllers: [TriController],
  providers: [TriService],
})
export class TriModule {}
