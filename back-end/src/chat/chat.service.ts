import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schemas/message.schema';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
    @InjectModel(User.name) private userModel: Model<User>
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

  async incrementUnreadMessages(userId: string): Promise<void> {
    try {
      const result = await this.userModel.findByIdAndUpdate(
        userId, 
        { $inc: { unreadMessages: 1 } }, 
        { new: true } 
      );
  
      if (!result) {
        throw new Error(`User with ID ${userId} not found`);
      }
    } catch (error) {
      console.error('Error incrementing unread messages:', error);
      throw new Error('Failed to increment unread messages count');
    }
    
  }

  
}
