import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { Video } from './entity/video.entity';
import { User } from 'src/user/entitties/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserLike } from "../user_like/like.entity";
import { Share } from "../share/share.entity";
import { WebsocketService } from "../websocket/websocket.service";
// import { SocketGateway } from "../socket.gateway";

@Module({
  imports: [
    TypeOrmModule.forFeature([Video, User,UserLike,Share]),
    ConfigModule,
  ],
  controllers: [VideoController],
  providers: [
    VideoService,
    // SocketGateway,
    WebsocketService
  ]
})
export class VideoModule {}
