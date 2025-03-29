import { UserEntity } from "src/user/domain/persistence/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_teacher')
export class TeacherEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'teacher_id' })
    id: string;

    @Column('varchar', {
        name: 'name',
        length: 20,
        nullable: false
    })
    name: string;

    @Column('varchar', {
        name: 'device_token',
        length: 255,
        nullable: false
    })
    deviceToken: string;

    @Column('time' , {
        name: 'no_notification_start_time',
        nullable: false
    })
    noNotificationStartTime: Date;

    @Column('time' , {
        name: 'no_notification_end_time',
        nullable: false
    })
    noNotificationEndTime: Date;

    @OneToOne(() => UserEntity, (user) => user.teacher)
    user: UserEntity;

    constructor(
        name: string,
        deviceToken: string,
        noNotificationStartTime: Date,
        noNotificationEndTime: Date
    ){
        this.name = name;
        this.deviceToken = deviceToken;
        this.noNotificationStartTime = noNotificationStartTime;
        this.noNotificationEndTime = noNotificationEndTime;
    }
}