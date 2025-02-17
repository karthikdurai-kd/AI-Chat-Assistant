"use server";

import { ChatCompletionMessage } from "./chat-completion-message";

// Making POST request to backend server, API Endpoint - "/localhost/openai/chatCompletion"
export default async function createChatCompletion(
  messages: ChatCompletionMessage[]
) {
  const response = await fetch(`${process.env.API_URL}/openai/chatCompletion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
    }),
  });
  // Returning the responses
  return response.json();
}
