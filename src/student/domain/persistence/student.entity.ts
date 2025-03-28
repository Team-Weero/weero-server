import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StudentRole } from "../student-role";

@Entity('tbl_student')
export class StudentEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'student_id' })
    id: string;

    @Column('varchar', {
        name: 'name',
        length: 20,
        nullable: false
    })
    name: string;

    @Column('varchar', {
        name: 'nickname',
        length: 20,
        nullable: false
    })
    nickname: string;

    @Column('varchar', {
        name: 'email',
        length: 255,
        nullable: false
    })
    email: string;

    @Column('int', {
        name: 'grade',
        nullable: false
    })
    grade: number;

    @Column('enum', {
        name: 'student_role',
        enum: StudentRole,
        nullable: false
    })
    studentRole: StudentRole;

    constructor(
        name: string,
        nickname: string,
        email: string,
        grade: number,
        studentRole: StudentRole
    ){
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.grade = grade;
        this.studentRole = studentRole;
    }
}