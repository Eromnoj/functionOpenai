import OpenAI from "openai";
const openai = new OpenAI(process.env.OPENAI_API_KEY);


export const functionRequestIA = async ({messages, tools}) => {

  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo-1106",
    tools: tools,
  })

  const functionName = completion.choices[0].message.tool_calls[0].function.name
  const functionParams = JSON.parse(completion.choices[0].message.tool_calls[0].function.arguments)

  return {
    name: functionName,
    params: functionParams
  }
}