import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenhashController } from './tokenhash/tokenhash.controller';
import { TokenhashService } from './tokenhash/tokenhash.service';

@Module({
  imports: [],
  controllers: [AppController, TokenhashController],
  providers: [AppService, TokenhashService],
})
export class AppModule {}
