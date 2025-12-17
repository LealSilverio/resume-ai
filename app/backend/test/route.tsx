import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral:latest",
        input: "Reply with: OpenRouter API key is working",
      }),
    });

    const data = await response.json();

    if (!data) {
      return NextResponse.json(
        { success: false, error: "No data returned from OpenRouter" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: data.output_text || data.output?.[0]?.content || "No response",
    });
  } catch (error: any) {
    // Always return a response in the catch block
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
