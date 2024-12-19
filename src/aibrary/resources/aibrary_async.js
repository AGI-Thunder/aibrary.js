const openai = require("openai");
const axios = require("axios");
const { AibraryChatCompletion } = require("./AibraryChatCompletion"); // Correct import path
const { Model } = require("./Model"); // Ensure Model is imported if used for mapping
const openai = require("openai");
const axios = require("axios");
const { AibraryChatCompletion } = require("./AibraryChatCompletion"); // Correct import path
const { Model } = require("./models"); // Ensure Model is imported if used for mapping

class AsyncAiBrary {
  constructor({ apiKey } = {}) {
    // Fetch API key from environment variables if not provided
    this.apiKey = apiKey || process.env.AIBRARY_API_KEY;

    // Throw error if API key is missing
    if (!this.apiKey) {
      throw new Error(
        "The api_key client option must be set either by passing apiKey to the client or by setting the AIBRARY_API_KEY environment variable"
      );
    }

    // Base URL for the API
    this.baseUrl = "https://api.aibrary.dev/v0";

    // Set OpenAI configuration
    openai.apiKey = this.apiKey;
    openai.baseUrl = this.baseUrl;

    // Initialize chat completions
    this.chat = {
      completions: new AibraryChatCompletion(this),
    };
  }

  /**
   * Fetch all models from the API.
   * @param {Object} options
   * @param {boolean} options.returnAsObjects - Return models as instances of Model or raw JSON data.
   * @param {string|null} options.filterCategory - Filter models by category.
   * @returns {Promise<Array>} - A list of models.
   */
  async getAllModels({ returnAsObjects = true, filterCategory = null } = {}) {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };

    const response = await axios.get(`${this.baseUrl}/dashboard/models`, {
      headers,
    });

    let data = response.data.models;

    // Filter by category if specified
    if (filterCategory) {
      data = data.filter(
        (item) => item.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    // Map to Model instances if requested
    if (returnAsObjects) {
      return data.map((item) => Model.fromJson(item));
    }

    return data;
  }
}

module.exports = { AsyncAiBrary };
