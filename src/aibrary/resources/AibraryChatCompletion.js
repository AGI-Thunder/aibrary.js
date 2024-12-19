const openai = require('openai');

class AibraryChatCompletion {
  constructor(openaiClient) {
    this.openaiClient = openaiClient;
  }

  async create({ system = null, ...kwargs }) {
    // For Anthropic, we need to pass `system` as a separate argument, not as a role in the message argument
    if (system !== null) {
      kwargs.extra_body = { ...kwargs.extra_body, system };
    }

    return this.openaiClient.completions.create(kwargs);
  }
}

module.exports = { AibraryChatCompletion };
