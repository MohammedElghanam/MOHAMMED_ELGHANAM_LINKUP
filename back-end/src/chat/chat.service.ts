import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schemas/message.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>
  ) {}

 
  async saveMessage(content: string, senderId: string, receiverId: string): Promise<Message> {
    const newMessage = new this.messageModel({ content, senderId, receiverId });
    return newMessage.save();
  }

  
  async getMessages(senderId: string, receiverId: string): Promise<Message[]> {
    return this.messageModel.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort({ createdAt: 1 }); 
  }
}
