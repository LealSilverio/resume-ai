import { NextResponse } from "next/server";
import { OpenRouter } from '@openrouter/sdk';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Call OpenRouter API
    const openRouter = new OpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const response = await openRouter.chat.send({
      model: "mistralai/mistral-7b-instruct:free",
      messages: [
        {
          role: "user",
          content: body.prompt,
        },
      ],
      stream: false,
    });

    // console.log("Response from OpenRouter:", response.choices?.[0]?.message?.content);
    
    return NextResponse.json({
      success:true,
      answer: response.choices?.[0]?.message?.content || "No response",
    });
    
  } catch (error: any) {
    console.error("Error in /backend/ai route:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
