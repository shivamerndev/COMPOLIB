
export const askAi = async ({ message = [
    {
        role: "system",
        content: "prompt whatever you want to provide."
    }, {
        role: "user",
        content: "User's Prompt"
    }
] }) => {

    const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
        model: "deepseek/deepseek-chat",
        messages: message,
        temperature: 0.7,
        max_tokens: 2000,
        response_format: { type: "json_object" }
    }, {
        headers: {
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            "X-OpenRouter-Title": "CompoLab",
            "Content-Type": "application/json"
        }
    })

    const content = response?.data?.choices[0].message.content;

    const clean = content.replace(/```json|```/g, "").trim();

    const Json = JSON.parse(clean);

    return Json;
}