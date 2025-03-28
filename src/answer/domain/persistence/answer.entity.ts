import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_answer')
export class AnswerEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'answer_id' })
    id: string;

    @Column('varchar', {
        name: 'answer',
        length: 255,
        nullable: false
    })
    answer: string;

    constructor(
        answer: string
    ){
        this.answer = answer;
    }
}