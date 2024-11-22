import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway(5002, {
  cors: {
    origin: '*'
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private readonly chatService: ChatService) {}
  
  handleConnection(client: Socket) {
    console.log('New user conected...', client.id);
    // console.log(client);
  }
  
  handleDisconnect(client: Socket) {
    console.log('User disconected...', client.id);
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @MessageBody() data: { content:string, senderId: string, receiverId:string},
    @ConnectedSocket() client: Socket,
  ) {
    console.log(data);
    console.log(data.content);
    console.log(data.senderId);
    console.log(data.receiverId); 

    if (!data.content || !data.senderId || !data.receiverId) {
      console.error('Invalid data received:', data);
      return client.emit('error', 'Invalid data: All fields are required.');
    }

    const savedMessage = await this.chatService.saveMessage(data.content, data.senderId, data.receiverId);

    this.server.emit('newMessage', savedMessage);
    // this.server.to(data.receiverId).emit('newMessage', savedMessage);
  }


  @SubscribeMessage('getMessages')
  async handleGetMessages(
    @MessageBody() data: { senderId: string; receiverId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const messages = await this.chatService.getMessages(data.senderId, data.receiverId);
    client.emit('messageHistory', messages);
  }

}
