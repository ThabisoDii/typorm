import { type } from "os";
import { AssignedKpiRating } from "src/assigned-kpi-rating/entities/assigned-kpi-rating.entity";
import { StaffMember } from "src/staff-member/entities/staff-member.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Kpi {

    @PrimaryGeneratedColumn()
    id:number
    @Column({unique:true})
    description:string
    @CreateDateColumn()
    created_at: Date; // Creation date
    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @OneToMany((type) => AssignedKpiRating,(assignedKpiRating) => assignedKpiRating.kpi)
    assignedKpiRatings: AssignedKpiRating[]
}
