class Model {
  constructor({
    provider,
    category,
    model_name,
    price_per_input_unit,
    price_per_output_unit,
    pricing_input_unit_type,
    pricing_output_unit_type,
    status,
    size = null,
    quality = null
  }) {
    this.provider = provider;
    this.category = category;
    this.model_name = model_name;
    this.price_per_input_unit = price_per_input_unit;
    this.price_per_output_unit = price_per_output_unit;
    this.pricing_input_unit_type = pricing_input_unit_type;
    this.pricing_output_unit_type = pricing_output_unit_type;
    this.status = status;
    this.size = size || "Unknown"; // Default to "Unknown" if size is not provided
    this.quality = quality || "Unknown"; // Default to "Unknown" if quality is not provided
  }

  // Static method to create a Model instance from a JSON object
  static fromJson(data) {
    return new Model({
      provider: data.provider || "Unknown",
      category: data.category || "Unknown",
      model_name: data.model_name || "Unknown",
      price_per_input_unit: data.price_per_input_unit || 0.0,
      price_per_output_unit: data.price_per_output_unit || 0.0,
      pricing_input_unit_type: data.pricing_input_unit_type || "Unknown",
      pricing_output_unit_type: data.pricing_output_unit_type || "Unknown",
      status: data.status || "Unknown",
      size: data.size || "Unknown",
      quality: data.quality || "Unknown"
    });
  }

  // Custom string representation (like __repr__ in Python)
  toString() {
    return (
      `Model(provider=${this.provider}, category=${this.category}, model_name=${this.model_name}, ` +
      `price_per_input_unit=${this.price_per_input_unit}, price_per_output_unit=${this.price_per_output_unit}, ` +
      `pricing_input_unit_type=${this.pricing_input_unit_type}, pricing_output_unit_type=${this.pricing_output_unit_type}, ` +
      `status=${this.status}, size=${this.size}, quality=${this.quality})`
    );
  }
}

module.exports = { Model };
