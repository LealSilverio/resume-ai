"use client";

import { useState } from "react";

export default function Page() {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const tailorResume = async () => {
    if (!jobDescription || !resumeFile) {
      alert("Please provide both job description and resume file.");
      return;
    }
    
    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("jobDescription", jobDescription);
    formData.append("resumeFile", resumeFile);

    // parse the uploaded file to text
    const fileText = await resumeFile.text();

    const res = await fetch("/backend/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `You are a professional resume writer. Return only the final tailored resume text — no commentary or explanations. 
        Format as plain text suitable for display with clear section headers (Summary, Skills, Experience, Education, Certifications) and use bullet points for responsibilities and achievements. 
        Match keywords and skills from the Job Description and prioritize relevant experience. Use concise, ATS-friendly language; avoid tables, images, or Markdown. 
        Keep it to ~1 page and ensure output is clean text suitable for direct rendering.
      Job Description:
      ${jobDescription}

      Resume:
      ${fileText}

      Rewrite and tailor the resume to best match the job description. Keep it concise, ATS-friendly, and professional.`,
      }),
    });

    const data = await res.json();
    setResult(data.answer);
    setLoading(false);
  };

  return (
    <div className="lg:w-1/2 flex flex-col gap-4">
      <div className="mb-4 mt-10">
        <h2 className="text-xl font-semibold dark:text-zinc-200">Job Description</h2>
        <textarea 
            className="min-w-2xl w-full h-50 border border-gray-300 rounded-md p-2" 
            placeholder="Enter job description..."
            onChange={e => setJobDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold dark:text-zinc-200">Resume</h2>
        <input 
            type="file" 
            accept=".pdf,.txt,.doc,.docx" 
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) => setFile(e.target.files?.[0] || null)}/>
      </div>
      <button 
        onClick={tailorResume}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >{loading ? "Editing Resume..." : "Submit"}</button>
      <div className="lg:w-2/2">
        {result && (
          <div className="mt-8 p-4 border border-gray-300 rounded-md ">
            <h3 className="text-xl font-semibold mb-4 dark:text-zinc-200">Tailored Resume</h3>
            <pre className="whitespace-pre-wrap dark:text-zinc-300">{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
