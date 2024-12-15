"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIBrary = void 0;
const openai_1 = __importDefault(require("openai"));
class AIBrary {
    constructor({ apiKey, baseURL }) {
        this.openai = new openai_1.default({
            apiKey,
            baseURL: baseURL || "https://api.openai.com/v1", // Default OpenAI API URL
        });
    }
    generateImage(prompt, size, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.openai.images.generate({
                    prompt,
                    n: 1,
                    size,
                    model,
                });
                return response.data;
            }
            catch (error) {
                console.error("Error generating image:", error);
                throw new Error("Failed to generate image");
            }
        });
    }
}
exports.AIBrary = AIBrary;
