import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Period } from "../period";


@Entity('tbl_counsel_application')
export class CounselApplicationEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'application_id'})
    id: string;

    @Column('boolean', {
        name: 'is_checked',
        nullable: false,
        default: false
    })
    isChecked: boolean;

    @Column('enum', {
        name: 'period',
        nullable: false,
        enum: Period
    })
    period: Period;

    @Column('date', {
        name: 'counsel_date',
        nullable: false
    })
    counselDate: Date;

    @Column('date', {
        name: 'application_date',
        nullable: false
    })
    applicationDate: Date;

    constructor(
        isChecked: boolean,
        period: Period,
        counselDate: Date,
        applicationDate: Date
    ){
        this.isChecked = isChecked;
        this.period = period;
        this.counselDate = counselDate;
        this.applicationDate = applicationDate;
    }
}