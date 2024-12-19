import { OpenAI } from 'openai';

class AibraryChatCompletion extends OpenAI {
    async create(params) {
        const { system, ...rest } = params;

        // For Anthropic we need to pass system as a separate argument, not as a role in the message argument.
        if (system) {
            rest.extra_body = { ...rest.extra_body, system };
        }

        return super.chat.completions.create(rest);
    }
}

export default AibraryChatCompletion;
