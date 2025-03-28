import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_chat_room')
export class ChatRoomEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'chat_room_id'})
    id: string;

    
}