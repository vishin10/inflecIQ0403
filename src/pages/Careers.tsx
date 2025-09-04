import React, { useMemo, useRef, useState } from "react";

// The Job type remains the same
type Job = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

// Expanded list of job roles
const JOBS: Job[] = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    description: "Own end-to-end delivery across backend services and modern frontends.",
    bullets: [
      "5+ years building production-grade web applications",
      "Expertise in Java + Spring Boot for scalable microservices",
      "Mastery of React (with Hooks), TypeScript, and state management (RTK/Zustand)",
      "Deep SQL knowledge (Postgres/MySQL), including query optimization and schema design",
      "Proficient with CI/CD pipelines (GitHub Actions/Jenkins) and Docker containerization",
      "Hands-on experience with a major cloud provider (AWS/GCP/Azure)",
      "A proactive approach to debugging, monitoring, and performance profiling",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Design reliable pipelines and scalable cloud infrastructure for our teams.",
    bullets: [
      "5+ years in DevOps, SRE, or Platform Engineering roles",
      "Mastery of Infrastructure as Code (Terraform/CloudFormation) and GitOps principles",
      "Expert-level CI/CD design (GitHub Actions/Jenkins), managing complex workflows",
      "Deep knowledge of Kubernetes (EKS/GKE), including networking, security, and Helm",
      "Strong cloud security posture management (secrets, IAM, network policies)",
      "Proven experience with observability stacks (Prometheus, Grafana, Loki, Jaeger)",
      "Advanced scripting skills (Python/Go/Bash) for automation and tooling",
    ],
  },
  {
    id: "react-developer",
    title: "React.js Developer",
    description: "Build fast, accessible UIs that scale and feel great to use.",
    bullets: [
      "5+ years of dedicated React development; expert in TypeScript",
      "Deep understanding of React hooks, context, and advanced composition patterns",
      "Experience with multiple state management libraries (Redux, Zustand, React Query)",
      "Proficient in integrating with REST and GraphQL APIs, including error handling",
      "Mastery of modern CSS solutions like Tailwind CSS or CSS-in-JS",
      "A strong advocate for accessibility (WCAG) and semantic HTML",
      "Experience with frontend build tools (Vite/Webpack) and bundle optimization",
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Define product vision and drive the roadmap from concept to launch.",
    bullets: [
      "4+ years of product management experience in an Agile software environment",
      "Proven ability to create and manage a product roadmap based on user research",
      "Experience writing clear and concise user stories, specs, and requirements",
      "Strong analytical skills; comfortable with data analysis to inform decisions",
      "Excellent communication skills to align engineering, design, and marketing teams",
      "Experience with A/B testing, user interviews, and market analysis",
      "A passion for creating intuitive products that solve real-world problems",
    ],
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    description: "Create beautiful, intuitive, and user-centered design solutions.",
    bullets: [
      "4+ years of experience in UX/UI design for web and mobile applications",
      "A strong portfolio showcasing your design process and high-fidelity mockups",
      "Proficiency in modern design tools like Figma, Sketch, and Adobe XD",
      "Experience creating wireframes, user flows, and interactive prototypes",
      "Solid understanding of user-centered design principles and methodologies",
      "Ability to conduct user research and usability testing to validate designs",
      "Experience working within a design system and contributing to its growth",
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Leverage data to uncover insights and build intelligent models.",
    bullets: [
      "4+ years of experience in a data science or quantitative analysis role",
      "Strong proficiency in Python for data manipulation (Pandas, NumPy) and modeling",
      "Expertise in machine learning frameworks (Scikit-learn, TensorFlow, PyTorch)",
      "Solid SQL skills and experience with large-scale data warehousing (BigQuery, Redshift)",
      "Experience developing and deploying machine learning models into production",
      "Ability to communicate complex findings to non-technical stakeholders",
      "A strong foundation in statistics, probability, and experimental design",
    ],
  },
];


// Helper component for the checkmark icons in lists
const CheckIcon = () => (
    <svg className="h-5 w-5 text-sky-500 flex-shrink-0" xmlns="http://www.w.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


export default function Careers() {
  // All state and logic hooks remain unchanged
  const [file, setFile] = useState<File | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState<string>(JOBS[0].id);
  const [otherRole, setOtherRole] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [statusText, setStatusText] = useState<string>("");

  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const positionOptions = useMemo(
    () => [
      ...JOBS.map(j => ({ id: j.id, label: j.title })),
      { id: "other", label: "Other (specify)" },
    ],
    []
  );

  const selectedJob = useMemo(
    () => JOBS.find(j => j.id === position),
    [position]
  );

  const applyForRole = (id: string) => {
    setPosition(id);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => fileInputRef.current?.focus(), 400);
  };
  
  // The handleSubmit function remains unchanged
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setStatus("err");
      setStatusText("Please attach a resume file.");
      return;
    }
    if (!fullName || !email) {
      setStatus("err");
      setStatusText("Name and email are required.");
      return;
    }
    if (position === "other" && !otherRole.trim()) {
      setStatus("err");
      setStatusText("Please specify the role you’re applying for.");
      return;
    }

    setStatus("loading");
    setStatusText("");

    const form = new FormData();
    form.append("resume", file);
    form.append("fullName", fullName);
    form.append("email", email);
    form.append("position", position);
    form.append("otherRole", otherRole);
    form.append("message", message);

    try {
      const base = import.meta.env.PROD
        ? (import.meta.env.VITE_API_BASE_URL as string) || ""
        : "";

      const res = await fetch(`${base}/api/uploadResume`, {
        method: "POST",
        body: form,
      });

      const text = await res.text();
      if (res.ok) {
        setStatus("ok");
        setStatusText("Thanks! Your application was submitted.");
        setFile(null);
        setFullName("");
        setEmail("");
        setOtherRole("");
        setMessage("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setStatus("err");
        setStatusText(text || "Upload failed. Please try again.");
      }
    } catch (err) {
      setStatus("err");
      setStatusText("Network error. Check API URL or try again.");
    }
  };

  return (
    <>
      {/* Style tag for the light animated background */}
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .light-animated-gradient {
          background: linear-gradient(-45deg, #e0f2fe, #e0e7ff, #fce7f3, #e0f2fe);
          background-size: 400% 400%;
          animation: gradient-move 15s ease infinite;
        }
      `}</style>
      <div className="light-animated-gradient min-h-screen">
        <div className="max-w-5xl mx-auto py-20 px-4">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-4">
              Find Your Next Challenge
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We are a team of innovators and problem-solvers. Explore our open positions and join us in building the future.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {JOBS.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                description={job.description}
                bullets={job.bullets}
                onApply={() => applyForRole(job.id)}
              />
            ))}
          </div>

          {/* Form with light glassmorphism effect */}
          <div ref={formRef} className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl p-8 mt-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Apply Now</h2>
            
            <div
                className={`transition-opacity duration-300 ${status !== "idle" ? "opacity-100 mb-6" : "opacity-0 h-0"}`}
            >
                {status !== "idle" && (
                    <div className={
                        status === "ok" ? "rounded-lg bg-green-100 border border-green-200 text-green-800 px-4 py-3 text-sm font-medium" :
                        status === "err" ? "rounded-lg bg-red-100 border border-red-200 text-red-800 px-4 py-3 text-sm font-medium" :
                        "rounded-lg bg-blue-100 border border-blue-200 text-blue-800 px-4 py-3 text-sm font-medium"
                    }>
                        {status === "loading" ? "Submitting application..." : statusText}
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
                        <input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full bg-white/50 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition px-3 py-2 text-slate-900 placeholder:text-slate-400" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-white/50 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition px-3 py-2 text-slate-900 placeholder:text-slate-400" />
                    </div>
                </div>

                <div>
                    <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-1">Position</label>
                    <select id="position" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full bg-white/50 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition px-3 py-2 text-slate-900">
                        {positionOptions.map((opt) => (<option key={opt.id} value={opt.id}>{opt.label}</option>))}
                    </select>
                </div>
                
                {position === "other" && (
                     <div>
                         <label htmlFor="otherRole" className="block text-sm font-medium text-slate-700 mb-1">Desired role</label>
                         <input id="otherRole" value={otherRole} onChange={(e) => setOtherRole(e.target.value)} required={position === 'other'} className="w-full bg-white/50 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition px-3 py-2 text-slate-900 placeholder:text-slate-400" />
                     </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Resume (PDF/DOCX)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <div className="flex text-sm text-slate-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-sky-600 hover:text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                                    <span>Upload a file</span>
                                    <input ref={fileInputRef} id="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] ?? null)} required />
                                </label>
                            </div>
                            {file ? <p className="text-sm text-slate-600 font-semibold">{file.name}</p> : <p className="text-xs text-slate-500">Up to 10MB</p>}
                        </div>
                    </div>
                </div>
                
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message <span className="text-slate-500">(optional)</span></label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full bg-white/50 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition px-3 py-2 text-slate-900 placeholder:text-slate-400" />
                </div>

                <button type="submit" disabled={status === "loading"} className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                    {status === "loading" ? "Submitting…" : "Submit Application"}
                </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// JobCard with light 3D hover effects and glassmorphism
function JobCard({
  title,
  description,
  bullets,
  onApply,
}: {
  title: string;
  description: string;
  bullets: string[];
  onApply: () => void;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2 hover:border-slate-300 transform-gpu">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
      <p className="text-slate-600 mb-5">{description}</p>
      <div className="space-y-2 mb-6">
        {bullets.slice(0, 4).map((b, i) => ( // Show first 4 bullets
          <div key={i} className="flex items-start">
            <CheckIcon />
            <span className="ml-2 text-slate-700">{b}</span>
          </div>
        ))}
      </div>
      <button
        className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-slate-800 transform hover:scale-105 active:scale-95"
        onClick={onApply}
      >
        Apply Now
      </button>
    </div>
  );
}