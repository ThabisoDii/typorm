import { Injectable } from '@nestjs/common';
import { CreateStaffMemberDto } from './dto/create-staff-member.dto';
import { UpdateStaffMemberDto } from './dto/update-staff-member.dto';
import { StaffMemberRepositoryService } from './staff-member-repository.service';

@Injectable()
export class StaffMemberService {

  constructor(private readonly staffMemberRepositoryService: StaffMemberRepositoryService){}

  
  create(createStaffMemberDto: CreateStaffMemberDto) {

    return this.staffMemberRepositoryService.insert(createStaffMemberDto)
    // 'This action adds a new staffMember';
  }

  findAll() {
    return `This action returns all staffMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staffMember`;
  }

  update(id: number, updateStaffMemberDto: UpdateStaffMemberDto) {
    return `This action updates a #${id} staffMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} staffMember`;
  }
}
