import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoModule } from "./video/video.module";
import { SocketGateway } from "./socket.gateway";
import { WebsocketService } from "./websocket/websocket.service";
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule, 
    AuthModule,
    ConfigModule.forRoot() ,
    VideoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    SocketGateway,
    WebsocketService
  ],
  exports: [WebsocketService]
})
export class AppModule {}
