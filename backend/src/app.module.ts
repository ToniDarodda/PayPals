import { Module } from '@nestjs/common';
import { HealthController } from './modules/health.controller';

@Module({
  imports: [],
  controllers: [HealthController],
})
export class AppModule {}
