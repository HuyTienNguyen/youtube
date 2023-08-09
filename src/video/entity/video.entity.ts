import { User } from "src/user/entitties/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('videos')
export class Video extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number ;
    @Column({ name: 'title', type: 'varchar', length: 255, nullable: false })
    title: string ;
    @Column({ name: 'url', type: 'varchar', length: 255, nullable: false })
    url: string ;

    @Column({
        nullable: false,
        name: 'likeCount',
        type: 'integer',
        default: 0,
    })
    likeCount: number ;

    // @Column({
    //     nullable: false,
    //     name: 'unlike',
    //     type: 'integer',
    //     default: 0,
    // })
    // unlike: number ;

    @ManyToOne(()=> User, (user)=> user.videos,{
        onDelete: "CASCADE"
    })
    user: User;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    

    

}