import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffMemberModule } from './staff-member/staff-member.module';
import { KpiModule } from './kpi/kpi.module';
import { AssignedKpiRatingModule } from './assigned-kpi-rating/assigned-kpi-rating.module';

@Module({
  imports: [StaffMemberModule,TypeOrmModule.forRoot(config), KpiModule, AssignedKpiRatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
