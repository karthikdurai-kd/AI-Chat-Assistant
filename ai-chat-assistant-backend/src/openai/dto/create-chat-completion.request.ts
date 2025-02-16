/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateChatCompletionRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatCompletionMessageDto)
  messages: ChatCompletionMessageDto[];
}

export class ChatCompletionMessageDto {
  @IsString()
  @IsNotEmpty()
  role: string; // Role -> 'User'/ 'System'

  @IsString()
  @IsNotEmpty()
  content: string; // Message content
}
