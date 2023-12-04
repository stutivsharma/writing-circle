import OpenAI from "openai"; // Assuming you have the OpenAI SDK installed

// Set your OpenAI API key
const apiKey = "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";

// Initialize the OpenAI SDK
const openai = new OpenAI({ apiKey });

export async function POST(request) {
  // ...existing code...

  const requestBody = await request.json();
  const subject = requestBody.subject;
  const location = requestBody.location;
  const format = requestBody.format;
  const keyword = requestBody.keyword;

  // Make API call to GPT-3
  console.log({ subject, location, format });
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You give writing prompts to users based on their input",
      },
      {
        role: "user",
        content:
          "Give 3 writing prompts based on this message from user.\n---\n" +
          `subject: ${subject}\n` +
          `location: ${location}\n---` +
          `format: ${format}\n---`,
      },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 200,
  });

  const data = { response: completion.choices[0].message.content.trim() };
  console.log(data);
  return Response.json(data);
}

export async function twoPOST(request) {
  // ...existing code...

  const requestBody = await request.json();
  const keyword = requestBody.keyword;

  // Make API call to GPT-3
  console.log({ keyword });
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You give one creative writing activity to users based on their input",
      },
      {
        role: "user",
        content:
          "Give a writing activity based on this message from user.\n---\n" +
          `keyword: ${keyword}\n---`,
      },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 200,
  });

  const data = { response: completion.choices[0].message.content.trim() };
  console.log(data);
  return Response.json(data);
}
