import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthMiddleware } from 'src/common/auth.middleware';
import { Message, MessageSchema } from 'src/chat/schemas/message.schema';

@Module({
  imports:[
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt'}),

    JwtModule.registerAsync({
      inject: [ ConfigService ],
      useFactory: (config: ConfigService) => {
        return{
          secret: config.get<string>('JWT_SECRET'),
          signOptions:{
            expiresIn:  config.get<string | number>('JWT_EXPIRES')
          }
        }
      }
    }),

    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}, { name: Message.name, schema: MessageSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware) 
      .forRoutes({ path: 'auth/getUsers', method: RequestMethod.POST });
  }
}
