import { Injectable } from '@nestjs/common';
import * as io from 'socket.io';

@Injectable()
export class WebsocketService {
  // create a service in order to manage list connection
  private socketServer: io.Server;

  constructor() {}

  setSocketServer(socketServer: io.Server) {
    this.socketServer = socketServer;
  }

  emitEventToAll(eventName: string, data: any) {
    if (this.socketServer) {
      this.socketServer.emit(eventName, data);
    }
  }
}
