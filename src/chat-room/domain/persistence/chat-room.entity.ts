import { MessageEntity } from "src/message/domain/persistence/message.entity";
import { UserEntity } from "src/user/domain/persistence/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_chat_room')
export class ChatRoomEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'chat_room_id'})
    id: string;

    @ManyToOne(() => UserEntity, (user) => user.startUserId)
    startUser: UserEntity;

    @ManyToOne(() => UserEntity, (user) => user.receiverUserId)
    receiverUser: UserEntity;

    @OneToMany(() => MessageEntity, (message) => message.chatroom)
    @JoinColumn({name: 'message_id', referencedColumnName: 'id'})
    message: MessageEntity[];

}