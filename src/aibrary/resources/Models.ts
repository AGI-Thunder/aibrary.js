export interface ModelData {
    provider?: string;
    category?: string;
    model_name?: string;
    price_per_input_unit?: number;
    price_per_output_unit?: number;
    pricing_input_unit_type?: string;
    pricing_output_unit_type?: string;
    status?: string;
  }
  
  export class Model {
    public provider: string;
    public category: string;
    public model_name: string;
    public price_per_input_unit: number;
    public price_per_output_unit: number;
    public pricing_input_unit_type: string;
    public pricing_output_unit_type: string;
    public status: string;
  
    constructor(
      provider: string,
      category: string,
      model_name: string,
      price_per_input_unit: number,
      price_per_output_unit: number,
      pricing_input_unit_type: string,
      pricing_output_unit_type: string,
      status: string
    ) {
      this.provider = provider;
      this.category = category;
      this.model_name = model_name;
      this.price_per_input_unit = price_per_input_unit;
      this.price_per_output_unit = price_per_output_unit;
      this.pricing_input_unit_type = pricing_input_unit_type;
      this.pricing_output_unit_type = pricing_output_unit_type;
      this.status = status;
    }
  
    public static fromJson(data: ModelData): Model {
      return new Model(
        data.provider ?? "Unknown",
        data.category ?? "Unknown",
        data.model_name ?? "Unknown",
        data.price_per_input_unit ?? 0.0,
        data.price_per_output_unit ?? 0.0,
        data.pricing_input_unit_type ?? "Unknown",
        data.pricing_output_unit_type ?? "Unknown",
        data.status ?? "Unknown"
      );
    }
  
    public toString(): string {
      return (
        `Model(provider=${this.provider}, category=${this.category}, model_name=${this.model_name}, ` +
        `price_per_input_unit=${this.price_per_input_unit}, price_per_output_unit=${this.price_per_output_unit}, ` +
        `pricing_input_unit_type=${this.pricing_input_unit_type}, pricing_output_unit_type=${this.pricing_output_unit_type}, ` +
        `status=${this.status})`
      );
    }
  }
  