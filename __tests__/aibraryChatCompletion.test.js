const { AibraryChatCompletion } = require('../src/aibrary/resources/AibraryChatCompletion');
const openai = require('openai');
jest.mock('openai');  // Mock OpenAI API

describe('AibraryChatCompletion Class', () => {
    let aibraryChat;
  
    beforeAll(() => {
      // Create a mock instance of OpenAI client with proper initialization
      const openaiClient = {
        apiKey: process.env.AIBRARY_API_KEY, // Read API key from .env
        completions: { create: jest.fn() } // Mocking the create method
      };
  
      // Initialize the AibraryChatCompletion with the mock client
      aibraryChat = new AibraryChatCompletion(openaiClient);
    });
  
    it('should initialize with the provided OpenAI client', () => {
      expect(aibraryChat.openaiClient.apiKey).toBe(process.env.AIBRARY_API_KEY);
    });
  
    it('should call the OpenAI API to create a completion', async () => {
      const mockCreate = jest.fn().mockResolvedValue({
        choices: [{ text: 'Hello, world!' }]
      });
      aibraryChat.openaiClient.completions.create = mockCreate;
  
      const response = await aibraryChat.create({
        prompt: 'What is the weather today?'
      });
  
      expect(mockCreate).toHaveBeenCalled();
      expect(response.choices[0].text).toBe('Hello, world!');
    });
  
    it('should handle passing a system message', async () => {
      const mockCreate = jest.fn().mockResolvedValue({
        choices: [{ text: 'System message added.' }]
      });
      aibraryChat.openaiClient.completions.create = mockCreate;
  
      const response = await aibraryChat.create({
        system: 'Anthropic',
        prompt: 'What is the weather today?'
      });
  
      expect(mockCreate).toHaveBeenCalled();
      expect(response.choices[0].text).toBe('System message added.');
    });
  });