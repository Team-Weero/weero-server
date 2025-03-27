import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    id: string;

    @Column('varchar', {
        length: 255 ,
        nullable: false
    })
    password: string;

    @Column('varchar', {
        length: 255 ,
        nullable: false
    })
    email: string;


    constructor(
        password: string,
        email: string
    ){
        this.password = password;
        this.email = email;
    }
}