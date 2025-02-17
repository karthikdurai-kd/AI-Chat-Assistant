# AI Chat Assistant

Full Stack Generative AI application using **NestJS** for the backend, **NextJS** for the frontend, and **OpenAI's GPT-4 API** for natural language processing.

## Tech Stack

- **Frontend**: NextJS
- **Styling**: Tailwind CSS, DaisyUI
- **Backend**: NestJS, TypeScript
- **API Integration**: OpenAI GPT-4 API

## Setup

### Backend Setup (NestJS)

1. Clone the repository:

   ```bash
   git clone https://github.com/karthikdurai-kd/AI-Chat-Assistant.git
   cd AI-Chat-Assistant
   ```

2. Navigate to the `ai-chat-assistant-backend` directory and install dependencies:

   ```bash
   cd ai-chat-assistant-backend
   npm install
   ```

3. Configure your OpenAI API key:

   - Create a `.env` file in the `ai-chat-assistant-backend` directory.
   - Add the following environment variable:
     ```
     OPENAI_API_KEY=your-openai-api-key
     ```

4. Start the backend server:
   ```bash
   npm run start:dev
   ```

### Frontend Setup (NextJS)

1. Install frontend dependencies:

   ```bash
   cd ai-chat-assistant-frontend
   npm install
   ```

2. Install DaisyUI alongside Tailwind CSS:

   ```bash
   npm install daisyui
   ```

3. Configure Tailwind CSS and DaisyUI:

   - Ensure your `tailwind.config.js` is set up to use DaisyUI.
     ```javascript
     module.exports = {
       content: [
         "./pages/**/*.{js,ts,jsx,tsx}",
         "./components/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [require("daisyui")],
     };
     ```

4. Start the frontend server:
   ```bash
   npm run dev
   ```

### Running Both Servers

- Backend: `http://localhost:3000`
- Frontend: `http://localhost:3001`

## Usage

1. Open `http://localhost:3001` in your browser to access the frontend.
2. Start chatting with the AI chat Assistant Application by typing your questions in the input box.
3. The chatbot will send requests to the backend, which will interact with the OpenAI API to generate responses.
