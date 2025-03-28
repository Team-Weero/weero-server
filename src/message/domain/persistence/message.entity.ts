import { ChatRoomEntity } from "src/chat-room/domain/persistence/chat-room.entity";
import { UserEntity } from "src/user/domain/persistence/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_message')
export class MessageEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'message_id'})
    id: string;

    @Column('varchar', {
        name: 'text',
        length: 255,
        nullable: false
    })
    text: string;

    @Column('datetime', {
        name: 'send_date',
        nullable: false
    })
    sendDate: Date;

    @Column('boolean', {
        name: 'read_status',
        nullable: false,
        default: false
    })
    readStatus: boolean;

    @ManyToOne(() => UserEntity, (user) => user.message)
    user: UserEntity;

    @ManyToOne(() => ChatRoomEntity, (chatroom) => chatroom.message)
    chatroom: ChatRoomEntity;

    constructor(
        text: string,
        sendDate: Date,
        readStatus: boolean
    ){
        this.text = text;
        this.sendDate = sendDate;
        this.readStatus = readStatus;
    }
}