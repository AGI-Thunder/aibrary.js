const { Model } = require('../src/aibrary/resources/Model');

describe('Model Class', () => {
  it('should create a Model instance from JSON data', () => {
    const jsonData = {
      provider: 'OpenAI',
      category: 'Text Generation',
      model_name: 'GPT-3',
      price_per_input_unit: 0.02,
      price_per_output_unit: 0.03,
      pricing_input_unit_type: 'tokens',
      pricing_output_unit_type: 'tokens',
      status: 'active',
      size: 'large',
      quality: 'high'
    };

    const model = Model.fromJson(jsonData);

    expect(model.provider).toBe('OpenAI');
    expect(model.model_name).toBe('GPT-3');
    expect(model.price_per_input_unit).toBe(0.02);
  });

  it('should return the correct string representation', () => {
    const model = new Model({
      provider: 'OpenAI',
      category: 'Text Generation',
      model_name: 'GPT-3',
      price_per_input_unit: 0.02,
      price_per_output_unit: 0.03,
      pricing_input_unit_type: 'tokens',
      pricing_output_unit_type: 'tokens',
      status: 'active',
      size: 'large',
      quality: 'high'
    });

    expect(model.toString()).toBe(
      'Model(provider=OpenAI, category=Text Generation, model_name=GPT-3, price_per_input_unit=0.02, price_per_output_unit=0.03, pricing_input_unit_type=tokens, pricing_output_unit_type=tokens, status=active, size=large, quality=high)'
    );
  });
});
