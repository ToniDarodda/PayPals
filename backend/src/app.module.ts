import { Module } from '@nestjs/common';
import { HealthController } from './modules/health.controller';
import { UserModule } from './modules/user/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { ConfigModule } from '@nestjs/config';
import { TriModule } from './modules/tri/module';

const modules = [UserModule, TriModule];

@Module({
  imports: [TypeOrmModule.forRoot(config), ConfigModule.forRoot(), ...modules],
  controllers: [HealthController],
})
export class AppModule {}
