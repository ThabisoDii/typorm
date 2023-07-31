import { Kpi } from "src/kpi/entities/kpi.entity";
import { StaffMember } from "src/staff-member/entities/staff-member.entity";
import { Column, Entity, ManyToOne, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class AssignedKpiRating {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    month:string
    @Column()
    target:number;
    @Column()
    score:number;
    @Column()
    weight:number
    @Column()
    comments:string;

   // @Column({nullable:false})
    @ManyToOne(type=>StaffMember,(staffMember) => staffMember.assignedKpiRatings,{ eager: true,nullable: false,})
    staffMember:StaffMember

   // @Column({nullable:false})
    @ManyToOne(type=>Kpi,(kpi) => kpi.assignedKpiRatings,{ eager: true,nullable: false,})
    kpi:Kpi


}
