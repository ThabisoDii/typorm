import { AssignedKpiRating } from "../../assigned-kpi-rating/entities/assigned-kpi-rating.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StaffMember {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false,unique:true})
    idNumber:string
    @Column({nullable:false})
    firstName:string
    @Column({nullable:false})
    lastName:string
    @Column({nullable:false,unique:true})
    employeeNumber:string


    @OneToMany((type) => AssignedKpiRating,(assignedKpiRating) => assignedKpiRating.staffMember)
    assignedKpiRatings: AssignedKpiRating[]
}
