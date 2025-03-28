import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_notice')
export class NoticeEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'notice_id'})
    id: string;

    @Column('varchar', {
        name: 'title',
        length: 255,
        nullable: false
    })
    title: string;

    @Column('varchar', {
        name: 'contents',
        length: 255,
        nullable: false
    })
    contents: string;

    constructor(
        title: string,
        contents: string
    ){
        this.title = title;
        this.contents = contents;
    }
}