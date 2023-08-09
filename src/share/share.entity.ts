import { User } from "src/user/entitties/user.entity";
import { Video } from "src/video/entity/video.entity";
import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique
} from "typeorm";

@Entity('shares')
@Unique(['userId', 'videoId'])
export class Share extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=> User,{ nullable: false })
    @JoinColumn({
        name: 'user_id',
    })
    userId: number ;


    @ManyToOne(()=> Video,{ nullable: false })
    @JoinColumn({
        name: 'video_id',
    })
    videoId: number ;

    @CreateDateColumn({ name: 'share_date' })
    shareDate: Date;


}