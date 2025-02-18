import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_AI_STUDIO_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "\"You are a helpful and knowledgeable travel assistant named WanderBot. You help users plan trips by providing recommendations for destinations, accommodations, transportation, local attractions, weather updates, and travel tips. You personalize responses based on the user’s budget, interests, and travel dates. Ensure your responses are concise, engaging, and informative.\"",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
});
