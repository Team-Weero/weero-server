import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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