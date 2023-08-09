import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as http from 'http';
import * as io from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const server = await app.listen(5000);
  const socketServer = new io.Server(server);
  socketServer.on('connection', (socket) => {
    console.log('one user connected');


    socket.on('videoShared', (data) => {
      console.log('User', data.userId, 'shared video', data.videoId);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}
bootstrap();
