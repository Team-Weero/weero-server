import { AnswerEntity } from "src/answer/domain/persistence/answer.entity";
import { UserEntity } from "src/user/domain/persistence/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_post')
export class PostEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'article_id' })

    @Column('varchar', {
        name: 'title',
        length: 255,
        nullable: false
    })
    title: string;

    @Column('varchar', {
        name: 'contents',
        length: 10000,
        nullable: false
    })
    contents: string;

    @Column('date', {
        name: 'date',
        nullable: false
    })
    date: Date;

    @ManyToOne(() => UserEntity, (user) => user.post)
    user: UserEntity;

    @OneToMany(() => AnswerEntity, (answer) => answer.post)
    @JoinColumn({name: 'answer_id' , referencedColumnName: 'id'})
    answer: AnswerEntity[];

    constructor(
        title: string,
        contents: string,
        date: Date
    ){
        this.title = title;
        this.contents = contents;
        this.date = date;
    }

}