import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function complete(
  systemPrompt: string,
  userMessage: string,
  model = 'gpt-4o'
): Promise<string> {
  const response = await openai.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage }
    ]
  });
  return response.choices[0]?.message?.content ?? '';
}
