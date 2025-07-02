const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY"
});

exports.chatHandler = async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful Walmart store assistant." },
        { role: "user", content: userMessage }
      ],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in chat response");
  }
};
