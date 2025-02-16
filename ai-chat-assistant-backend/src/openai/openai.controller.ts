import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dto/create-chat-completion.request';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openAiService: OpenaiService) {}

  // POST Request, API-> "/openai/chatCompletion", Usage - "Used for invoking OpenAI's chat completion API"
  @Post('chatCompletion')
  async createChatCompletion(@Body() body: CreateChatCompletionRequest) {
    return this.openAiService.createChatCompletionRequest(body.messages);
  }
}
