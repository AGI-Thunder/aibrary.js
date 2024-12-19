const { AiBrary } = require('../src/aibrary/resources/aibrary_sync');
const axios = require('axios');
jest.mock('axios');  // Mock axios to simulate API calls
require('dotenv').config();  // Load environment variables from .env file

describe('AiBrary Class', () => {
  let aibrary;

  beforeAll(() => {
    // Set up a mock instance of AiBrary
    const apiKey = 'sampleapikey';
    aibrary = new AiBrary({ apiKey });
  });

  it('should initialize with the provided API key', () => {
    expect(aibrary.apiKey).toBe('sampleapikey');
  });

  it('should throw an error if no API key is provided', () => {
    expect(() => new AiBrary({})).toThrow(
      'The api_key client option must be set either by passing apiKey to the client or by setting the AIBRARY_API_KEY environment variable'
    );
  });

  it('should call OpenAI API to fetch models and return mocked data', async () => {
    // Mocking the API response
    axios.get.mockResolvedValue({
      data: {
        models: [
          { model_name: 'GPT-4', category: 'Text Generation', status: 'active' }
        ]
      }
    });

    // Test the getAllModels method
    const models = await aibrary.getAllModels();
    expect(models).toHaveLength(1);
    expect(models[0].model_name).toBe('GPT-4');
  });
});
