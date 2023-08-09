
import { Video } from "src/video/entity/video.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number ;
    @Column({ name: 'username', type: 'varchar', length: 255, nullable: false })
    username: string ;
    @Column({ name: 'email', unique: true,  type: 'varchar', length: 255, nullable: false })
    email: string ;
    @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
    password: string ;
    

    
    @Column({ name: 'date_of_birth', type: 'date',  nullable: true  })
    date_of_birth: Date;
    
    @Column({ name: 'phone_number', type: 'varchar', length: 255, nullable: true })
    phone_number: string ;
    @Column({ nullable: true, default: null })
    refresh_token: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @OneToMany(() => Video, (video) => video.user)
    videos: Video[]

}