import JobInput from "./components/JobInput";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-h-screen w-full max-w-7xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Needs help tailoring your Resume?
          </h1>
          <p className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Upload your resume and paste your job description to get a tailored
            resume that stands out to recruiters!
          </p>
        </div>
        <div className="mt-8">
          <JobInput />
        </div>
      </main>
    </div>
  );
}

// Job Description for testing:
// Job Overview:
// We are seeking a reliable and hardworking Laborer to join our team. As a Laborer, you will be responsible for helping with the entire process from start to finish which can include operating fork lifts and scissor lifts, running materials around the job site, and working with other people.

// Duties:
// - Assist with the fabrication and assembly of buildings using hand tools and power tools
// - Load and unload materials from trucks
// - Operate a forklift to move materials on the jobsite
// - Perform general maintenance tasks such as cleaning and organizing work areas
// - Follow safety protocols and wear appropriate protective equipment

// Requirements:
// - Previous experience working in construction or similar environment is preferred
// - Proficiency in using hand tools and power tools
// - Ability to read and interpret basic instructions
// - Familiarity with operating a forklift is a plus
// - Physical stamina to perform repetitive tasks and lift heavy objects
// - Strong attention to detail and ability to follow instructions accurately
// - Good balance and being comfortable with heights is a plus


// Seeking a front desk Medical Receptionist for a busy medical practice. The job entails scheduling appointments, checking patients in and out of the clinic, verifying patient information and insurance, collecting patient co-pays and balances, mailing appointment reminder postcards. Looking for someone with excellent people skills. Needs to be very detail-oriented. Works well with others in a team-oriented environment. Dependability is a must. The office is closed on weekends and holidays.