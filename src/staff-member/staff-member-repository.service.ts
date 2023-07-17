import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaffMember } from './entities/staff-member.entity';

@Injectable()
export class StaffMemberRepositoryService extends Repository<StaffMember>{

    constructor(
        @InjectRepository(StaffMember)
        private staffMemberRepository : Repository<StaffMember>
    ) {
        super(staffMemberRepository.target,staffMemberRepository.manager,staffMemberRepository.queryRunner)
    }

}
