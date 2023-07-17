import { Module } from '@nestjs/common';
import { StaffMemberService } from './staff-member.service';
import { StaffMemberController } from './staff-member.controller';
import { StaffMemberRepositoryService } from './staff-member-repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffMember } from './entities/staff-member.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StaffMember])],
  controllers: [StaffMemberController],
  providers: [StaffMemberService, StaffMemberRepositoryService],
  exports: [StaffMemberService, StaffMemberRepositoryService]
})
export class StaffMemberModule {}
