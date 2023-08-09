import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody
  } from "@nestjs/websockets";
  import { Server  } from "socket.io";
  import { WebsocketService } from "./websocket/websocket.service";
  import { Injectable } from "@nestjs/common";


  @WebSocketGateway({

    cors: {
      origin: '*'
    }
  })
@Injectable()

export class SocketGateway  implements OnGatewayConnection, OnGatewayDisconnect{
    constructor(private websocketService: WebsocketService) {}

    @WebSocketServer()
    server: Server;
   
    @SubscribeMessage('videoShared')
    handleVideoSharedEvent(@MessageBody() data: any): void {
      this.server.emit('videoShared', data);
    }
    afterInit() {
        this.websocketService.setSocketServer(this.server); // Update the socket server instance
      }

  
    handleConnection() {
      console.log('Client connected');
    }
  
    handleDisconnect() {
      console.log('Client disconnected');
    }
  


}