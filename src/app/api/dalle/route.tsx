import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_DALLE_APIKEY,
});

export async function POST(request: Request) {
  const json = await request.json();
  try {
    const response = await openai.images.generate({
      prompt: json.prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    return new Response(JSON.stringify({ image: response.data[0].b64_json }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return new Response("Invalid JSON Format", { status: 400 });
  }
}

export function GET() {
    return Response.json({status: 200, message: 'masti'});
}