import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from 'mongoose';

@Schema({
    timestamps: true
})
export class Message {

    @Prop({ 
        type: Types.ObjectId,
        ref: 'User',
        required: true
    })
    userId: Types.ObjectId;

    @Prop({ required: true })
    message: string;
}
export const MessageSchema = SchemaFactory.createForClass(Message);