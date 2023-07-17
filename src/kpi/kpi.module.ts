import { Module } from '@nestjs/common';
import { KpiService } from './kpi.service';
import { KpiController } from './kpi.controller';
import { KpiRepositoryService } from './kpi-repository.service';
import { Kpi } from './entities/kpi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [KpiController],
  imports:[TypeOrmModule.forFeature([Kpi])],
  providers:[KpiService, KpiRepositoryService],
  exports : [KpiService, KpiRepositoryService]
})
export class KpiModule {}
