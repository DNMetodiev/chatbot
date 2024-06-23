# Sarah Chatbot

This is a Vue.js application for a customer support chatbot named Sarah. It utilizes the OpenAI API to power dynamic, intelligent chatbot responses.

## Features

- **Text Interaction**: Users interact with the chatbot through text messages.
- **AI-Powered Responses**: Utilizes OpenAI API for generating chatbot responses.
- **Session Continuation**: Users can start a new chat or potentially continue a previous one (feature not implemented yet).

## Folder Structure

- **/components**: Contains reusable Vue components for the UI.
  - `Chat.vue`: The main chat window component.
  - `MessageForm.vue`: Allows user to input messages.
  - `Start.vue`: The initial screen for starting or continuing chats.
- **/composables**: Composable functions for state management.
  - `customer.ts`: Manages customer name state and initials.
  - `state.ts`: Manages chat and message state.
- **/server**: Server-side logic using Node.js and Express.
  - `API`: API endpoints for application interaction.
  - `message.get.ts`: Retrieves latest messages from OpenAI.
  - `message.post.ts`: Sends user messages and retrieves responses from OpenAI.
  - `thread.ts`: Creates new conversation threads with OpenAI.
- **/utils**: Utility functions for OpenAI API interaction.
  - `get-message.ts`: Retrieves messages for a specific thread and run.
  - `openai.ts`: Configures OpenAI client and assistant ID.
- `nuxt.config.ts`: Nuxt.js configuration file.

## Prerequisites

- Node.js and npm (or yarn) must be installed.
- An OpenAI API key and assistant ID. You must create these on the OpenAI website and add them to the `openai.ts` file.

## Setting up OpenAI API and Assistant ID

1. Visit the OpenAI website and sign up or log in.
2. Navigate to the API section and create a new API key.
3. Follow the instructions to also create an Assistant ID.
4. Replace the placeholder values in the `openai.ts` file with your new API key and Assistant ID.

## Installation

1. Clone this repository.
2. Run `npm install` or `yarn install` to install dependencies.

## Running the Application

1. Execute `npm run dev` or `yarn dev` to start the development server.
2. Access the application in your browser at `http://localhost:3000`.

Enjoy interacting with Sarah, your friendly customer support chatbot!
