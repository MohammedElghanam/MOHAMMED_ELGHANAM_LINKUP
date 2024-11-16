import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    MongooseModule.forRoot('mongodb://localhost:27017/LINKUP'),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
