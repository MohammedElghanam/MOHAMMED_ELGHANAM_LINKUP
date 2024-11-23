import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { Message, MessageSchema } from './schemas/message.schema';
import { UserSchema } from 'src/auth/schemas/user.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }, { name: 'User', schema: UserSchema}])],
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
