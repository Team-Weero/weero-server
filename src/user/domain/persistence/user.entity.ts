import { ChatRoomEntity } from "src/chat-room/domain/persistence/chat-room.entity";
import { CounselApplicationEntity } from "src/counsel-application/domain/persistence/counsel-application.entity";
import { MessageEntity } from "src/message/domain/persistence/message.entity";
import { NoticeEntity } from "src/notice/domain/persistence/notice.entity";
import { PostEntity } from "src/post/domain/persistence/post.entity";
import { StudentEntity } from "src/student/domain/persistence/student.entity";
import { TeacherEntity } from "src/teacher/domain/persistence/teacher.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    id: string;

    @Column('varchar', {
        name: 'password',
        length: 255 ,
        nullable: false
    })
    password: string;

    @Column('varchar', {
        name: 'email',
        length: 255 ,
        nullable: false
    })
    email: string;

    @OneToOne(() => StudentEntity, (student) => student.user)
    @JoinColumn({name: 'student_id', referencedColumnName: 'id'})
    student: StudentEntity;

    @OneToOne(() => TeacherEntity, (teacher) => teacher.user)
    @JoinColumn({name: 'teacher_id', referencedColumnName: 'id'})
    teacher: TeacherEntity;
                
    @OneToMany(() => NoticeEntity, (notice) => notice.user)
    @JoinColumn({name: 'notice_id', referencedColumnName: 'id'})
    notice: NoticeEntity[];

    @OneToMany(() => PostEntity, (post) => post.user)
    @JoinColumn({name: 'post_id', referencedColumnName: 'id'})
    post: PostEntity[];

    @OneToMany(() => CounselApplicationEntity, (application) => application.user)
    @JoinColumn({name: 'application_id', referencedColumnName: 'id'})
    application: CounselApplicationEntity[];

    @OneToMany(() => MessageEntity, (message) => message.user)
    @JoinColumn({name: 'message_id', referencedColumnName: 'id'})
    message: MessageEntity[];
    
    @OneToMany(() => ChatRoomEntity, (chatRoom) => chatRoom.startUser)
    @JoinColumn({name: 'start_user_id', referencedColumnName: 'id'})
    startUserId: ChatRoomEntity[];

    @OneToMany(() => ChatRoomEntity, (chatRoom) => chatRoom.receiverUser)
    @JoinColumn({name: 'receiver_user_id', referencedColumnName: 'id'})
    receiverUserId: ChatRoomEntity[];

    constructor(
        password: string,
        email: string
    ){
        this.password = password;
        this.email = email;
    }
}