import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, ResponseMessage } from './authDto/register.dto';
import { Message } from 'src/chat/schemas/message.schema';

@Injectable()
export class AuthService {
    constructor( 

        @InjectModel(User.name) private userModel: Model<User>, 
        private jwtService: JwtService,
        @InjectModel(Message.name) private messageModel: Model<Message>
        
    ){}

    async register ( registerDto: RegisterDto ): Promise<{ message: string, user: object | null }> {
        const { name, email, password }= registerDto;

        const existingUser = await this.userModel.findOne({ email });
        if (existingUser) throw new BadRequestException('Email is already in use');

        try {
            const hashPassword = await bcrypt.hash(password, 10)
            const user= await this.userModel.create({
                name,
                email,
                password: hashPassword
            })

            return {
                message: "The user has been created successfully and is ready to use the system.",
                user
            }
        } catch (error) {
            console.error('Error creating user:', error);
            throw new BadRequestException('Failed to create user in the database');
        }
    }

    async login ( registerDto: RegisterDto ): Promise<{ token: string }> {
        const { email, password } = registerDto;

        const user = await this.userModel.findOne({ email })
        if( !user ) throw new Error('User not found');

        try {
            const isMatch = await bcrypt.compare(password, user.password)
            if( !isMatch ) throw new Error('Password incorrect');

            const token = this.jwtService.sign({ 
                userId: user._id, 
                name: user.name,
                email: user.email, 
            });

            return { token };

        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Login failed');
        }
    }


    async getUsers(id: any, saveUser: any): Promise<ResponseMessage> {
        try {
          const users = await this.userModel.find({ _id: { $ne: id } }).exec();
      
          const messages = await this.messageModel
            .find({
              $or: [{ senderId: id }, { receiverId: saveUser._id }],
            })
            .sort({ createdAt: -1 })
            .exec();
      
            console.log(messages);
          const lastMessageMap = new Map();
      
          messages.forEach((message) => {
            const otherUserId =
              message.senderId.toString() === id
                ? message.receiverId.toString()
                : message.senderId.toString();
      
            if (!lastMessageMap.has(otherUserId)) {
              lastMessageMap.set(otherUserId, (message as any).createdAt);
            }
          });
      
          const sortedUsers = users.sort((a, b) => {
            const aLastMessage = lastMessageMap.get(a._id.toString()) || new Date(0);
            const bLastMessage = lastMessageMap.get(b._id.toString()) || new Date(0);
      
            return bLastMessage.getTime() - aLastMessage.getTime();
          });
      
          return {
            success: true,
            message: 'Users retrieved and sorted successfully',
            data: sortedUsers,
          };
        } catch (error) {
          console.error(error);
          return {
            success: false,
            message: 'Failed to retrieve and sort users',
            data: [],
          };
        }
      }

      

}