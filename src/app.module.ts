import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ChatgptModule,
    TelegramModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
