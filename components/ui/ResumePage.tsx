import { Dithering } from '@paper-design/shaders-react';
import { useState } from 'react';

// --- DATA ---
const resumeData = {
  name: 'Abdulaziz Ba Haj',
  title: 'Front-End Developer (Angular, React)',
  contact: {
    phone: '+966 50 193-8374',
    email: 'abdulazizbahajworks@gmail.com',
    linkedin: 'https://linkedin.com/in/abdulaziz-bahaj',
    github: 'https://github.com/AbdulazizBaHaj',
    SCE: 'https://drive.google.com/file/d/149QWGQh8x2isv_cVuQXTBvo16R_NlVUU/view?usp=sharing',
    CV: 'https://drive.google.com/file/d/1TRehvMIMOrktrhKVrKZLQlRpLbil-uAZ/view?usp=sharing',
  },
  summary: `Front-End & Full-Stack Developer with 3+ years of experience building responsive web apps and internal tools using React, Angular, Node.js, and TypeScript. Led development of purchase-order, e‑invoicing, and warehouse systems that streamlined operations, reduced manual data entry, and improved visibility for sales and management teams. Proven track record delivering ERP/CRM modules, ticketing systems, and marketing pages with strong UX, plus a B.Sc. in Computer Science (CGPA 3.69/4.0) and multiple academic awards.`,
  experience: [
    {
      role: 'IT Operations Specialist',
      company: 'Alam Al-Jlod Alragyah Est.',
      date: 'Jul 2025 – Present',
      location: 'Jeddah, Saudi Arabia',
      points: [
        'Architected and developed a full-stack web system to manage international purchase orders, digitizing forms, manager approvals, government submissions, and document re-uploads so the sales team and management could track each PO end-to-end.',
        'Led development of internal tools using React and Node.js to streamline sales, warehousing, and document workflows for the commercial team.',
        'Built a mobile-friendly sales billing app that let sales reps create bills on their phones, with a management view for monitoring issued invoices and follow-up.',
        'Implemented a CSV-generation tool for warehouse in/out movements that could be imported into the ERP, reducing manual data entry and mismatched stock records.',
        'Created an online PDF letter generator with rich text editing and branded watermark templates, standardizing official company correspondence and saving time on formatting.',
      ],
    },
    {
      role: 'IT Operations Specialist',
      company: 'Alam Al-Jlod Alragyah Est.',
      date: 'Jan 2025 – Jun 2025',
      location: 'Jeddah, Saudi Arabia',
      points: [
        'Led digital transformation from paper-based operations to ZATCA-compliant e-invoicing system across two branches.',
        'Procured/configured central server, POS systems, and e-invoice integration for real-time stock/sales tracking.',
        'Reduced reconciliation time and improved inventory accuracy by automating warehouse management processes.',
        'Eliminated paper dependency company-wide by training non-technical staff on digital workflows.',
      ],
    },
    {
      role: 'Frontend Developer (Contract)',
      company: 'Almajdouie Group',
      date: 'Aug 2023 – Nov 2024',
      location: 'Remote',
      points: [
        'Delivered fully responsive marketing landing page using Laravel Blade and Bootstrap within 4-month contract.',
        'Collaborated with Development Team Lead and marketing team to meet UX specs and project milestones.',
        'Improved lead generation performance by implementing interactive UI components and conversion flow optimization.',
        'Achieved seamless experience across 5+ device breakpoints through responsive design and testing.',
      ],
    },
    {
      role: 'Angular Developer (Contract – Co-op)',
      company: 'Almajdouie Group',
      date: 'Apr 2024 – Jul 2024',
      location: 'Remote',
      points: [
        'Enhanced internal ticketing/queuing system using Angular with real-time updates and RxJS state management.',
        'Partnered with Technical PM and UI/UX team to refine component usability within 4-month co-op.',
        'Improved ticket processing visibility and workflow efficiency through scalable component implementation.',
        'Optimized system performance by leveraging efficient RxJS operators for state management.',
      ],
    },
    {
      role: 'Frontend Developer – Angular & Ionic',
      company: 'BigLedger Sdn. Bhd.',
      date: 'Feb 2023 – Feb 2024',
      location: 'Selangor, Malaysia',
      points: [
        'Developed responsive interfaces for cloud-native ERP/CRM platform across 4 modules serving 100+ enterprise clients.',
        'Collaborated with 4 backend developers in Agile environment to deliver 15+ features and bug fixes.',
        'Improved data retrieval speed and UX by implementing MVVM-based search across 6+ modules.',
        'Ensured iOS/Android reliability through QA testing and DBeaver performance analysis.',
      ],
    },
  ],
  education: [
    {
      institution: 'Universiti Teknologi Malaysia (UTM)',
      degree: 'Bachelor of Computer Science (Network & Security)',
      date: 'Aug 2018 – Feb 2023',
      location: 'Johor Bahru, Malaysia',
      points: [
        'Graduated with CGPA of 3.69 out of 4',
        'Recipient of the Dean’s Award for Academic Excellence',
        'Earned Dean’s List Honors in 5 semesters',
      ],
    },
  ],
  skills: {
    Languages: 'JavaScript, TypeScript, PHP',
    'Frontend Frameworks & Libraries':
      'Angular, React, Ionic, Bootstrap, Laravel Blade, Node.js',
    'Markup & Styling': 'HTML, CSS',
    'State Management': 'RxJS, Angular Services, MVVM Pattern',
    'Tools & Platforms': 'Git, Jira',
    Practices:
      'Agile/Scrum, Responsive Design, QA Testing, Performance Optimization',
    'Spoken Languages': 'Arabic (Native), English (Professional Proficiency)',
  },
  awards: [
    "Dean's Award, Universiti Teknologi Malaysia – Academic Excellence (2023)",
    "Dean's List Honors, 5 Semesters – UTM (2019–2022)",
    'CCNA: Enterprise Networking, Security & Automation, Cisco (2021)',
    'CCNA: Switching, Routing & Wireless Essentials, Cisco (2021)',
    'CCNA: Introduction to Networks, Cisco (2021)',
    'Responsive Web Design, freeCodeCamp (2022)',
    'Full Stack Development Track, One Million Arab Coders (2020)',
  ],
  projects: [
    {
      name: 'Youtube Clone',
      description:
        "A recreation of YouTube's video watch page interface built entirely with HTML and CSS. This project demonstrates advanced front-end development skills including responsive design, Flexbox layouts, and modern CSS techniques.",
      techStack: ['HTML', 'CSS'],
      githubLink: 'https://github.com/AbdulazizBaHaj/youtube-clone',
    },
    {
      name: 'Coin Flip Game',
      description:
        'A sleek, interactive coin-flipping game built with HTML, CSS, and JavaScript. This project showcases modern web development skills including responsive design, CSS animations, and vanilla JavaScript DOM manipulation.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubLink: 'https://github.com/AbdulazizBaHaj/coin-flip-game-js',
    },
    {
      name: 'GitHub Random Repository',
      description:
        'A simple, fast, and interactive web application that helps users discover random GitHub repositories by selecting a programming language.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST API'],
      githubLink: 'https://github.com/AbdulazizBaHaj/github-random-repository',
    },
    {
      name: 'Production-Ready SaaS Frontend',
      description:
        'A comprehensive Next.js 15 application demonstrating production-level SaaS development practices. Features include secure API integration with dynamic filtering, complete authentication flows (email verification and password reset), comprehensive state management with loading/empty/error states, and TypeScript strict mode. Built with Server and Client Components architecture, URL-driven state management, and includes mock APIs for testing. Showcases professional git workflow with incremental commits and detailed documentation.',
      techStack: [
        'Next.js 15',
        'TypeScript',
        'React',
        'Tailwind CSS',
        'Recharts',
        'REST API',
        'Pull Request',
      ],
      githubLink:
        'https://github.com/AbdulazizBaHaj/feelix-frontend-prod-ready',
    },
    {
      name: 'QR Code Generator',
      description:
        'A production-grade React feature demonstrating advanced component architecture, custom hooks, and API integration. Built with a feature-based folder structure for scalability, this project showcases state management patterns, client-side validation, error handling with retry logic, and clean separation of concerns following enterprise React best practices.',
      techStack: ['React', 'Next.js', 'JavaScript', 'REST API'],
      githubLink:
        'https://github.com/AbdulazizBaHaj/feelix-practical-react-challenge',
    },
    {
      name: 'Aldana Landing Page',
      description:
        'A professional multi-language landing page built with Laravel 9, featuring English and Arabic localization with RTL support. Implements a production-ready quote request system with automated email notifications, form validation, and SMTP integration. Showcases full-stack Laravel development including Blade components architecture, middleware implementation for language switching, custom mailable classes, and clean MVC patterns. Demonstrates backend proficiency with proper environment configuration, database migrations, and secure form handling.',
      techStack: [
        'Laravel 9',
        'PHP',
        'MySQL',
        'Blade Templates',
        'SMTP',
        'i18n',
        'Composer',
        'Laravel Mix',
      ],
      githubLink:
        'https://github.com/AbdulazizBaHaj/aldana-landing-page-laravel-v9',
    },
    {
      name: 'Infinity Todo',
      description:
        'A full-featured task management web application built with PHP and MySQL for a technical assessment. Implements complete user authentication (registration/login), organized task management with group functionality, and CRUD operations. Features an MVC-like architecture with separate config, controllers, and database layers. Demonstrates backend development skills including session management, database design, secure authentication patterns, and structured PHP application architecture.',
      techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'MVC Architecture'],
      githubLink:
        'https://github.com/AbdulazizBaHaj/technical-assessment-infinity-todo',
    },
    {
      name: 'MELI Learning Management System',
      description:
        'A comprehensive Learning Management System (LMS) built with Laravel for the Majdouie E-Learning Institute. Manages educational programs, courses, certifications, and student enrollment with a complete administrative interface. Demonstrates enterprise-level Laravel development including complex relational database design, role-based access control, course curriculum management, student progress tracking, and certificate generation. Features scalable architecture for handling multiple programs, instructors, and student cohorts with full CRUD operations across all entities.',
      techStack: [
        'Laravel',
        'PHP',
        'MySQL',
        'Blade Templates',
        'MVC Architecture',
        'Authentication',
        'Authorization',
      ],
      githubLink: 'https://github.com/AbdulazizBaHaj/meli-system',
    },
  ],
  documents: [
    {
      id: 1,
      title:
        'Bachelor of Computer Science (Computer Networks and Security) with Honours',
      organization: 'Universiti Teknologi Malaysia (UTM)',
      date: 'Mar 2023',
      description:
        "Earned a specialized degree in network architecture and cybersecurity with high distinction. Recognized with the Dean's Award for Academic Excellence (2023) and consistently named to the Dean's List for 5 semesters (2019–2022). The program focused on advanced cryptography, ethical hacking, and network infrastructure, providing a strong foundation in securing and managing enterprise-level digital systems.",
      documentLink:
        'https://drive.google.com/file/d/1Jocg_QXWBIL6GJoOuDUhPxgXbPve6QCh/view?usp=sharing',
    },
    {
      id: 2,
      title: 'Full Academic Transcripts',
      organization: 'Universiti Teknologi Malaysia (UTM)',
      date: '2019 – 2023',
      description:
        "Official academic record detailing the completion of the Bachelor of Computer Science (Computer Networks and Security) program. This transcript documents a consistent record of high achievement, including 5 Dean's List honors and the culminating Dean's Award for Academic Excellence in 2023.",
      documentLink:
        'https://drive.google.com/file/d/1ppdudvHnHFmLR2NGToIRYf_Whwf_LZIt/view?usp=sharing',
    },
    {
      id: 3,
      title: 'CCNA: Introduction to Networks',
      organization: 'Cisco',
      date: 'Mar 2021',
      description:
        "CCNA Introduction to Networks (ITN) is the first course in Cisco's CCNA curriculum. It introduces core networking concepts, including architectures, models, protocols, and components of the internet and computer networks.",
      documentLink:
        'https://www.credly.com/badges/12bd0ba9-2cd4-4c66-9958-39c76ca154f7',
    },
    {
      id: 4,
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      organization: 'Cisco',
      date: 'Apr 2021',
      description:
        'CCNA Switching, Routing, and Wireless Essentials (SRWE) is the second Cisco Networking Academy course focusing on intermediate networking concepts, including VLANs, STP, inter-VLAN routing, and wireless (WLAN) security. It covers configuration, troubleshooting, and securing small-to-medium business networks.',
      documentLink:
        'https://www.credly.com/badges/4eb29d31-1624-4f81-88f0-f63828ebd977',
    },
    {
      id: 5,
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      organization: 'Cisco',
      date: 'Apr 2021',
      description:
        'CCNA Enterprise Networking, Security, and Automation (ENSA) is the final course in the Cisco Networking Academy CCNA series, focusing on advanced WAN technologies, network security, virtualization, and automation. It covers OSPF, VPNs, QoS, and software-defined networking (SDN) to prepare students for enterprise-level networking roles.',
      documentLink:
        'https://www.credly.com/badges/0dacbc34-7284-4b37-b5cb-3c6cb32675c4',
    },
    {
      id: 6,
      title: 'freeCodeCamp: Responsive Web Design Certification',
      organization: 'freeCodeCamp',
      date: 'Jun 2021',
      description:
        "This course teaches the fundamentals of HTML and CSS, including modern layout, design, accessibility, and responsive web development. You'll build practical projects and gain the skills to create professional, user-friendly webpages.",
      documentLink:
        'https://www.freecodecamp.org/certification/abdulazizbahaj/responsive-web-design',
    },
    {
      id: 7,
      title: 'Full Stack Development Track',
      organization: 'One Million Arab Coders',
      date: 'Nov 2020',
      description:
        'The One Million Arab Coders Full Stack Development track is an intensive 8-10 week Udacity-powered program focused on building end-to-end web application skills, covering Python, SQL, and GitHub, while emphasizing practical, project-based learning. It was one of the top tracks, representing over 31% of registrations, and aimed to empower Arab youth with future-ready digital skills.',
      documentLink:
        'https://drive.google.com/file/d/1bGkjHHrkfoQMSDkzx3tuJshzeYRyPmIO/view?usp=sharing',
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
      expanded ? 'rotate-180' : 'rotate-0'
    }`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ViewIcon = () => (
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
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function ResumePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedExperience, setExpandedExperience] = useState<{
    [key: number]: boolean;
  }>({});
  const [expandedDoc, setExpandedDoc] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [expandedEducation, setExpandedEducation] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExperience = (index: number) => {
    setExpandedExperience((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleDocument = (id: number) => {
    setExpandedDoc((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleEducation = (index: number) => {
    setExpandedEducation((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden flex flex-col md:flex-row font-mono ${
        isDarkMode ? 'bg-black text-gray-200' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 relative z-10 overflow-y-auto">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`absolute top-6 right-6 sm:top-8 sm:right-8 p-2 rounded-full transition-colors ${
            isDarkMode
              ? 'text-gray-300 hover:bg-white/10'
              : 'text-gray-700 hover:bg-black/10'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>

        <header className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div
              className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0 border-2 ${
                isDarkMode ? 'border-pink-400' : 'border-blue-600'
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
                  isDarkMode ? 'text-pink-400' : 'text-blue-600'
                }`}
              >
                {resumeData.title}
              </h2>
              <span
                className={`inline-flex items-center gap-2 mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                  isDarkMode
                    ? 'bg-pink-900 text-pink-300'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                <span className="leading-none">
                  Open to Middle East relocation
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-9 gap-y-2 mt-4 text-sm">
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
            <a
              href={resumeData.contact.CV}
              target="_blank"
              rel="noopener noreferrer"
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
                {/* file-text icon */}
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>{' '}
              Resume
            </a>
            <a
              href={resumeData.contact.SCE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <img
                src="/sce-logo-on-dark.svg"
                alt="Saudi Council of Engineers"
                className={`h-5 w-auto transition ${
                  isDarkMode ? '' : 'invert'
                }`}
              />
              Saudi Council of Engineers ID: 956411
            </a>
          </div>
        </header>

        <main className="space-y-10">
          <section>
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">
              Professional Summary
            </h3>
            <div className="text-base leading-relaxed space-y-4">
              {resumeData.summary.split('\n').map((para, i) => (
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
                            isDarkMode ? 'text-pink-300' : 'text-blue-500'
                          }`}
                        >
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center text-right flex-shrink-0 pl-4">
                        <div className="flex flex-col items-end">
                          <span className="text-xs md:text-sm text-gray-400">
                            {job.date}
                          </span>
                          <span className="text-xs md:text-sm text-gray-400">
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
                      expandedExperience[index] ? 'max-h-[100%]' : 'max-h-0'
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
                <button
                  onClick={() => toggleEducation(index)} // <--- Update function
                  className="w-full text-left"
                  aria-expanded={!!expandedEducation[index]} // <--- Update state
                  aria-controls={`education-details-${index}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p
                        className={
                          isDarkMode ? 'text-pink-300' : 'text-blue-500'
                        }
                      >
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center text-right flex-shrink-0 pl-4">
                      <div className="flex flex-col items-end">
                        <span className="text-xs md:text-sm text-gray-400">
                          {edu.date}
                        </span>
                        <span className="text-xs md:text-sm text-gray-400">
                          {edu.location}
                        </span>
                      </div>
                      <div className="ml-4">
                        <ChevronDownIcon
                          expanded={!!expandedEducation[index]}
                        />
                      </div>
                    </div>
                  </div>
                </button>

                <div
                  id={`education-details-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedEducation[index] ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <ul className="list-disc list-inside space-y-1 text-base mt-2">
                    {edu.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
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
                    {skills.split(',').map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          isDarkMode
                            ? 'bg-pink-900/40 text-pink-200 border border-pink-700/40'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
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
                      ? 'bg-gray-900/50 border-gray-800 hover:border-pink-500/50 hover:bg-gray-900'
                      : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg'
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
                              ? 'text-gray-400 hover:text-white'
                              : 'text-gray-500 hover:text-black'
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
                              ? 'text-gray-400 hover:text-pink-400'
                              : 'text-gray-500 hover:text-blue-600'
                          }`}
                          title="Live Demo"
                        ></a>
                      )}
                    </div>
                  </div>

                  <p
                    className={`text-sm mb-4 leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
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
                            ? 'border-gray-700 text-gray-400 group-hover:border-pink-500/30 group-hover:text-pink-300'
                            : 'border-gray-300 text-gray-500 group-hover:border-blue-400/50 group-hover:text-blue-600'
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

          {/* --- NEW SECTION: Relevant Documents --- */}
          <section className="pt-4">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">
              Relevant Documents
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {resumeData.documents.map((doc) => (
                <div
                  key={doc.id}
                  className={`group rounded-lg border overflow-hidden transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gray-900/50 border-gray-800 hover:border-pink-500/50'
                      : 'bg-white border-gray-200 hover:border-blue-400'
                  }`}
                >
                  <button
                    onClick={() => toggleDocument(doc.id)}
                    className="w-full text-left p-6 hover:opacity-80 transition-opacity"
                    aria-expanded={!!expandedDoc[doc.id]}
                    aria-controls={`doc-details-${doc.id}`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4
                          className={`text-lg font-bold mb-2 cursor-pointer ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {doc.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 items-center text-sm">
                          <span
                            className={`${
                              isDarkMode ? 'text-pink-400' : 'text-blue-600'
                            } font-semibold`}
                          >
                            {doc.organization}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{doc.date}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronDownIcon expanded={!!expandedDoc[doc.id]} />
                      </div>
                    </div>
                  </button>

                  <div
                    id={`doc-details-${doc.id}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedDoc[doc.id] ? 'max-h-[100%]' : 'max-h-0'
                    }`}
                  >
                    <div
                      className={`px-6 pb-6 border-t ${
                        isDarkMode ? 'border-gray-800' : 'border-gray-200'
                      }`}
                    >
                      <p
                        className={`text-base leading-relaxed px-6 py-6 mb-4${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {doc.description}
                      </p>

                      <div className="flex gap-3 justify-end">
                        <a
                          href={doc.documentLink}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                            isDarkMode
                              ? 'bg-pink-600/80 hover:bg-pink-600 text-white'
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                          target="_blank"
                        >
                          <ViewIcon />
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <div className="w-full h-96 md:h-auto sm:w-1/2 relative">
        <Dithering
          style={{ height: '100%', width: '100%' }}
          colorBack={isDarkMode ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 95%)'}
          colorFront={
            isDarkMode ? 'hsl(320, 100%, 70%)' : 'hsl(220, 100%, 70%)'
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
