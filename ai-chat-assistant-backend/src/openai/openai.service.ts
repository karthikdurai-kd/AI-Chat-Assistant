import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageDto } from './dto/create-chat-completion.request';
import { ChatCompletionAssistantMessageParam } from 'openai/resources';

@Injectable()
export class OpenaiService {
  constructor(private readonly openai: OpenAI) {}

  // Chat Completion service method
  async createChatCompletionRequest(messages: ChatCompletionMessageDto[]) {
    return this.openai.chat.completions.create({
      messages: messages as ChatCompletionAssistantMessageParam[],
      model: 'gpt-4',
    });
  }
}
