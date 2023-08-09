import { User } from "src/user/entitties/user.entity";
import { Video } from "src/video/entity/video.entity";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique
} from "typeorm";
import { USER_LIKE_STATUS } from "../utils/constants";

@Entity('user_like')
@Unique(['userId', 'videoId'])
export class UserLike extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number ;

    @ManyToOne(()=> User,(User)=> User.id)
    @JoinColumn({
        name: 'user_id',
    })
    userId: number ;
    
    @ManyToOne(()=> Video,(Video)=> Video.id)
    @JoinColumn({
        name: 'video_id',
    })
    videoId: number ;

    @Column({
        nullable: false,
        type: 'enum',
        enum: USER_LIKE_STATUS,
        default: USER_LIKE_STATUS.NULL,
    })
    status: USER_LIKE_STATUS;
    


    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    

    

}