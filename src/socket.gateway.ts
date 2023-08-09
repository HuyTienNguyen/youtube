// import {
//   OnGatewayConnection,
//   OnGatewayDisconnect,
//   WebSocketGateway,
//   WebSocketServer,
//   SubscribeMessage,
//   MessageBody
// } from "@nestjs/websockets";
// import { Server } from "socket.io";
// import { WebsocketService } from "./websocket/websocket.service";
// import { Socket } from "socket.io";
// import { Injectable } from "@nestjs/common";
//
//
//
// @WebSocketGateway({
//   cors: {
//     origin: '*'
//   }
// })
// @Injectable()
//
// export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   //edit websocket gateway in order to add and remove connection
//   constructor( private websocketService: WebsocketService) {}
//   @WebSocketServer()
//   server: Server;
//   handleConnection(socket: Socket): any {
//     this.websocketService.addConnection(socket);
//   }
//   handleDisconnect(socket: Socket) : any {
//     this.websocketService.removeConnection(socket);
//   }
//
//
//   sendShareNotification(userId: number , videoTitle: string, callback: () => void) {
//     this.websocketService.getConnections().forEach(async (client) => {
//       console.log("start emit ");
//       await client.emit('share', { userId, videoTitle });
//       console.log("end emit ");
//       callback(); // Gọi callback khi emit hoàn thành
//     });
//   }
//
//   @SubcribeMessage('newMessage')
//   onNewMessage(@MessageBody() body: any){
//     console.log(body);
//     this.server.emit('onMessage', {
//       msg:' new message ',
//       content: body
//     })
//   }
//
//
// }