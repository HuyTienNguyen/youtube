import { DataSource, DataSourceOptions } from "typeorm";

import { User } from "src/user/entitties/user.entity";
import { Share } from "src/share/share.entity";
import { UserLike } from "src/user_like/like.entity";
import { Video } from "src/video/entity/video.entity";
import * as process from "process";
import * as dotenv from 'dotenv';
dotenv.config();

export const  dataSourceOptions: DataSourceOptions= {
    host: process.env.DB_HOST ,
    type: "mysql" ,// i don't know why i set value equivalent process.env.DB_TYPE error?
    port:parseInt(process.env.DB_PORT, 10) ,
    username: process.env.DB_USER ,
    password: process.env.DB_PASS ,
    database:  process.env.DB_NAME ,
    entities: [
        User,
        Share,
        UserLike,
        Video
    ],
    synchronize: true 
}


const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
