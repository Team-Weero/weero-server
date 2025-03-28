import { PostEntity } from "src/post/domain/persistence/post.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => PostEntity, (post) => post.answer)
    post: PostEntity;

    constructor(
        answer: string
    ){
        this.answer = answer;
    }
}