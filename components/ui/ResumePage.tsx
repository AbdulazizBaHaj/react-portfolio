import { Dithering } from "@paper-design/shaders-react";
import React, { useState } from "react";

// --- DATA ---
const resumeData = {
  name: "Abdulaziz Ba Haj",
  title: "Front-End Developer (Angular, React)",
  contact: {
    phone: "+966 50 193-8374",
    email: "abdulazizbahajworks@gmail.com",
    linkedin: "https://linkedin.com/in/abdulaziz-bahaj",
    github: "https://github.com/AbdulazizBaHaj",
  },
  summary: `Front-End Developer with strong expertise in Angular, React, TypeScript, and modern UI frameworks. Experienced in creating responsive, high-performance web applications with clean, maintainable code.

Skilled in RxJS state management, API integration, and mobile-friendly UI/UX using Bootstrap and Ionic. Adept at Agile collaboration through Jira and Git.

Holds a B.Sc. in Computer Science (Network & Security) and certifications in Responsive Web Design (freeCodeCamp) and Cisco CCNA. Passionate about continuous learning and delivering smooth, user-centered digital experiences.`,

  experience: [
    {
      role: "Frontend Developer",
      company: "Almajdouie Group",
      date: "Jul 2023 – Sep 2023",
      location: "Remote",
      points: [
        "Developed a fully responsive landing page using Laravel Blade and Bootstrap",
        "Enhanced UI interactivity and mobile experience, improving lead conversion rates",
        "Collaborated across teams to meet tight delivery deadlines",
      ],
    },
    {
      role: "Angular Developer – (Co-op)",
      company: "Almajdouie Group",
      date: "May 2023 – Jun 2023",
      location: "Remote",
      points: [
        "Enhanced internal ticketing and queuing system with Angular 14 and RxJS",
        "Built reusable, scalable UI components improving overall system performance",
        "Partnered with the UX team to refine interface usability and accessibility",
      ],
    },
    {
      role: "Frontend Developer – Angular & Ionic",
      company: "BigLedger Sdn. Bhd.",
      date: "Aug 2022 – Feb 2023",
      location: "Selangor, Malaysia",
      points: [
        "Designed and tested Angular + Ionic mobile-friendly interfaces",
        "Reduced UI load time by 25% through optimization of rendering logic",
        "Supported QA testing and sprint planning using Jira, Git, and DBeaver",
      ],
    },
  ],
  education: [
    {
      institution: "Universiti Teknologi Malaysia (UTM)",
      degree: "Bachelor of Computer Science (Network & Security)",
      date: "Aug 2018 – Feb 2023",
      location: "Johor Bahru, Malaysia",
      details: "Graduated with CGPA of 3.69 out of 4",
    },
  ],
  skills: {
    Languages: "JavaScript, TypeScript, HTML5, CSS3, PHP, Python",
    Frameworks: "Angular, React, Laravel, Ionic, Node.js",
    Tools: "Git, Jira, Docker, AWS, VS Code",
    Databases: "MySQL, PostgreSQL, MongoDB",
    Methodologies: "Agile, Scrum",
  },
  awards: [
    "Dean's Award, Universiti Teknologi Malaysia – Academic Excellence (2023)",
    "Dean's List Honors, 5 Semesters – UTM (2019–2022)",
    "CCNA: Enterprise Networking, Security & Automation, Cisco (2021)",
    "CCNA: Switching, Routing & Wireless Essentials, Cisco (2021)",
    "CCNA: Introduction to Networks, Cisco (2021)",
    "Responsive Web Design, freeCodeCamp (2022)",
  ],
  projects: [
    {
      name: "Youtube Clone",
      description:
        "A recreation of YouTube's video watch page interface built entirely with HTML and CSS. This project demonstrates advanced front-end development skills including responsive design, Flexbox layouts, and modern CSS techniques.",
      techStack: ["HTML", "CSS"],
      githubLink: "https://github.com/AbdulazizBaHaj/youtube-clone",
    },
  ],
};

// --- ICONS ---
const SunIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const ChevronDownIcon = ({ expanded }: { expanded?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-300 transform ${
      expanded ? "rotate-180" : "rotate-0"
    }`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function ResumePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedExperience, setExpandedExperience] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExperience = (index: number) => {
    setExpandedExperience((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden flex flex-col md:flex-row font-mono ${
        isDarkMode ? "bg-black text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 relative z-10 overflow-y-auto">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`absolute top-6 right-6 sm:top-8 sm:right-8 p-2 rounded-full transition-colors ${
            isDarkMode
              ? "text-gray-300 hover:bg-white/10"
              : "text-gray-700 hover:bg-black/10"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>

        <header className="mb-10">
          <div className="flex items-center gap-4 md:gap-6 mb-4">
            <div
              className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0 border-2 ${
                isDarkMode ? "border-pink-400" : "border-blue-600"
              }`}
            >
              <img
                src="https://avatars.githubusercontent.com/u/74532125?v=4"
                alt="Abdulaziz Ba Haj"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                {resumeData.name}
              </h1>
              <h2
                className={`text-lg md:text-2xl font-light ${
                  isDarkMode ? "text-pink-400" : "text-blue-600"
                }`}
              >
                {resumeData.title}
              </h2>
              <span
                className={`inline-flex items-center gap-2 mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                  isDarkMode
                    ? "bg-pink-900 text-pink-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                <span className="text-sm leading-none">💼</span>
                <span className="leading-none">
                  Open to work in Saudi Arabia, UAE, Qatar
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm">
            <a
              href={`tel:${resumeData.contact.phone}`}
              className="flex items-center gap-2 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {resumeData.contact.phone}
            </a>
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="flex items-center gap-2 hover:underline"
            >
              <MailIcon /> {resumeData.contact.email}
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </header>

        <main className="space-y-10">
          <section>
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">
              Professional Summary
            </h3>
            <div className="text-base leading-relaxed space-y-4">
              {resumeData.summary.split("\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">
              Experience
            </h3>
            <div className="space-y-8">
              {resumeData.experience.map((job, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleExperience(index)}
                    className="w-full text-left"
                    aria-expanded={!!expandedExperience[index]}
                    aria-controls={`experience-details-${index}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold">{job.role}</h4>
                        <p
                          className={`${
                            isDarkMode ? "text-pink-300" : "text-blue-500"
                          }`}
                        >
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center text-right flex-shrink-0 pl-4">
                        <div className="flex flex-col items-end">
                          <span className="text-sm text-gray-400">
                            {job.date}
                          </span>
                          <span className="text-sm text-gray-400">
                            {job.location}
                          </span>
                        </div>
                        <div className="ml-4">
                          <ChevronDownIcon
                            expanded={!!expandedExperience[index]}
                          />
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    id={`experience-details-${index}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedExperience[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="list-disc list-inside space-y-1 text-base mt-2">
                      {job.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">
              Education
            </h3>
            {resumeData.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-lg font-bold">{edu.institution}</h4>
                  <span className="text-sm text-gray-400">{edu.date}</span>
                </div>
                <p>{edu.degree}</p>
                <p className="text-sm text-gray-400">{edu.details}</p>
              </div>
            ))}
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-2 uppercase tracking-wide opacity-80">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.split(",").map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          isDarkMode
                            ? "bg-pink-900/40 text-pink-200 border border-pink-700/40"
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">
              Awards & Certifications
            </h3>
            <ul className="list-disc list-inside space-y-1 text-base">
              {resumeData.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </section>

          {/* --- NEW SECTION: Personal Projects --- */}
          <section className="pt-4">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2 flex items-center gap-2">
              Personal Projects
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {resumeData.projects.map((project, index) => (
                <div
                  key={index}
                  className={`group p-5 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                    isDarkMode
                      ? "bg-gray-900/50 border-gray-800 hover:border-pink-500/50 hover:bg-gray-900"
                      : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold flex items-center gap-2">
                      {project.name}
                    </h4>
                    <div className="flex gap-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors ${
                            isDarkMode
                              ? "text-gray-400 hover:text-white"
                              : "text-gray-500 hover:text-black"
                          }`}
                          title="View Source"
                        >
                          <GitHubIcon />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors ${
                            isDarkMode
                              ? "text-gray-400 hover:text-pink-400"
                              : "text-gray-500 hover:text-blue-600"
                          }`}
                          title="Live Demo"
                        ></a>
                      )}
                    </div>
                  </div>

                  <p
                    className={`text-sm mb-4 leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${
                          isDarkMode
                            ? "border-gray-700 text-gray-400 group-hover:border-pink-500/30 group-hover:text-pink-300"
                            : "border-gray-300 text-gray-500 group-hover:border-blue-400/50 group-hover:text-blue-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <div className="w-full h-96 md:h-auto md:w-1/2 relative">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDarkMode ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 95%)"}
          colorFront={
            isDarkMode ? "hsl(320, 100%, 70%)" : "hsl(220, 100%, 70%)"
          }
          shape="cat"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </div>
  );
}
