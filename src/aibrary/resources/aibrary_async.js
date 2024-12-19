const openai = require('openai');
const axios = require('axios');
const { AibraryChatCompletion } = require('./AibraryChatCompletion');  // Correct import path

class AsyncAiBrary {
  constructor({ apiKey, ...kwargs }) {
    if (!apiKey) {
      apiKey = process.env.AIBRARY_API_KEY;
    }
    if (!apiKey) {
      throw new Error(
        'The api_key client option must be set either by passing apiKey to the client or by setting the AIBRARY_API_KEY environment variable'
      );
    }

    this.apiKey = apiKey;
    this.baseUrl = 'https://api.aibrary.dev/v0';

    openai.apiKey = this.apiKey;
    openai.baseUrl = this.baseUrl;

    this.chat = {
      completions: new AibraryChatCompletion(this)
    };
  }

  async getAllModels({ returnAsObjects = true, filterCategory = null } = {}) {
    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    };

    const response = await axios.get(`${this.baseUrl}/dashboard/models`, { headers });
    let data = response.data.models;

    if (filterCategory) {
      data = data.filter((item) => item.category.toLowerCase() === filterCategory.toLowerCase());
    }

    if (returnAsObjects) {
      return data.map((item) => Model.fromJson(item));
    }
    return data;
  }
}

module.exports = { AsyncAiBrary };
