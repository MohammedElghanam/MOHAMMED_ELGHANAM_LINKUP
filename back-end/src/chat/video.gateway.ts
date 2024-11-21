import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(5003, { cors: { origin: '*' } })
export class VideoGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  handleSendMessage(client: any, payload: any): void {
    this.server.emit('receiveMessage', payload);
  }

  @SubscribeMessage('sendOffer')
  handleSendOffer(client: any, payload: any): void {
    this.server.emit('receiveOffer', payload);
  }

  @SubscribeMessage('sendAnswer')
  handleSendAnswer(client: any, payload: any): void {
    this.server.emit('receiveAnswer', payload);
  }

  @SubscribeMessage('sendCandidate')
  handleSendCandidate(client: any, payload: any): void {
    this.server.emit('receiveCandidate', payload);
  }
}
