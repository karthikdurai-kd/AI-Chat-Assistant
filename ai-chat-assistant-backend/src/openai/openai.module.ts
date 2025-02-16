import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { ConfigModule } from '@nestjs/config';
import { OpenaiService } from './openai.service';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [OpenaiController],
  providers: [
    OpenaiService,
    {
      provide: OpenAI,
      // useFactory - used for setting up provider dynamically and import injection into it
      useFactory: (configService: ConfigService) => {
        return new OpenAI({ apiKey: configService.getOrThrow('OPEN_API_KEY') });
      },
      inject: [ConfigService],
    },
  ],
})
export class OpenaiModule {}
