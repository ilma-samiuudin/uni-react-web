import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaBookOpen, FaClock, FaTimes } from 'react-icons/fa';

export const PROGRAMS = [
  {
    id: 'bs-cs',
    category: 'Computing',
    title: 'BS Computer Science',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; mathematics requirements vary by institution.',
    overview: 'Build a strong foundation in computing, algorithms, and the design of modern software and intelligent systems.',
    studyAreas: ['Programming and data structures', 'Algorithms and databases', 'Artificial intelligence', 'Operating systems and networks', 'Software and web development'],
    careers: ['Software developer', 'Systems analyst', 'AI or data associate', 'IT consultant'],
  },
  {
    id: 'bs-se',
    category: 'Computing',
    title: 'BS Software Engineering',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; mathematics requirements vary by institution.',
    overview: 'Learn how to plan, build, test, and maintain reliable software for real-world needs.',
    studyAreas: ['Programming and object-oriented design', 'Software requirements and architecture', 'Quality assurance and testing', 'Project management', 'Cloud and mobile application development'],
    careers: ['Software engineer', 'Quality assurance engineer', 'Application developer', 'Product associate'],
  },
  {
    id: 'bs-ai',
    category: 'Computing',
    title: 'BS Artificial Intelligence',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; mathematics requirements vary by institution.',
    overview: 'Explore intelligent systems that learn from data and assist with complex decisions.',
    studyAreas: ['Programming and mathematics for AI', 'Machine learning', 'Neural networks and deep learning', 'Natural language processing', 'Computer vision and robotics'],
    careers: ['Machine learning associate', 'AI application developer', 'Data analyst', 'Research assistant'],
  },
  {
    id: 'bs-ds',
    category: 'Computing',
    title: 'BS Data Science',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; mathematics requirements vary by institution.',
    overview: 'Turn raw data into useful insights using statistics, programming, and visualisation.',
    studyAreas: ['Statistics and probability', 'Data structures and Python', 'Data management', 'Machine learning', 'Data visualisation and analytics'],
    careers: ['Data analyst', 'Business intelligence associate', 'Junior data scientist', 'Research assistant'],
  },
  {
    id: 'bs-cybersecurity',
    category: 'Computing',
    title: 'BS Cyber Security',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; mathematics or computing background may be preferred.',
    overview: 'Study how to protect digital systems, networks, and information from security threats.',
    studyAreas: ['Computer networks', 'Secure programming', 'Digital forensics', 'Information security', 'Risk management and incident response'],
    careers: ['Security analyst', 'SOC associate', 'Digital forensics assistant', 'IT risk associate'],
  },
  {
    id: 'bs-it',
    category: 'Computing',
    title: 'BS Information Technology',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; subject requirements vary by institution.',
    overview: 'Develop practical skills for deploying and supporting the technology organisations rely on.',
    studyAreas: ['Programming fundamentals', 'Networks and systems administration', 'Web technologies', 'Databases', 'IT service and project management'],
    careers: ['IT support specialist', 'Network administrator', 'Systems administrator', 'Web developer'],
  },
  {
    id: 'bba',
    category: 'Business',
    title: 'Bachelor of Business Administration (BBA)',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; admission criteria vary by institution.',
    overview: 'Build broad knowledge of how organisations operate, make decisions, and grow.',
    studyAreas: ['Management and leadership', 'Accounting and finance', 'Marketing', 'Human resources', 'Business communication and strategy'],
    careers: ['Business development associate', 'Marketing executive', 'HR associate', 'Management trainee'],
  },
  {
    id: 'mba',
    category: 'Business',
    title: 'Master of Business Administration (MBA)',
    level: 'Graduate',
    duration: '1.5–2 years',
    eligibility: 'A recognised bachelor’s degree; work experience or an entry test may be required.',
    overview: 'Advance business knowledge and leadership skills for managing teams, operations, and strategy.',
    studyAreas: ['Corporate finance', 'Marketing strategy', 'Operations and supply chain', 'Leadership', 'Business analytics and strategy'],
    careers: ['Project manager', 'Business consultant', 'Operations manager', 'Marketing manager'],
  },
  {
    id: 'bs-accounting-finance',
    category: 'Business',
    title: 'BS Accounting & Finance',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; mathematics or accounting background may be preferred.',
    overview: 'Understand financial reporting, investment, and the principles behind sound financial decisions.',
    studyAreas: ['Financial and management accounting', 'Auditing', 'Corporate finance', 'Taxation', 'Investment and risk'],
    careers: ['Accounts officer', 'Audit associate', 'Financial analyst', 'Banking associate'],
  },
  {
    id: 'bs-economics',
    category: 'Business',
    title: 'BS Economics',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; mathematics requirements vary by institution.',
    overview: 'Use economic theory and evidence to understand markets, public policy, and development.',
    studyAreas: ['Microeconomics and macroeconomics', 'Statistics and econometrics', 'Development economics', 'Public policy', 'International trade'],
    careers: ['Research assistant', 'Economic analyst', 'Policy associate', 'Banking associate'],
  },
  {
    id: 'bs-electrical-engineering',
    category: 'Engineering',
    title: 'BS Electrical Engineering',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Usually HSSC Pre-Engineering or equivalent; entry tests and subject requirements apply.',
    overview: 'Study the design and application of electrical, electronic, and energy systems.',
    studyAreas: ['Circuit analysis and electronics', 'Signals and systems', 'Power systems', 'Control systems', 'Embedded systems'],
    careers: ['Electrical engineer', 'Power systems associate', 'Control systems engineer', 'Electronics design associate'],
  },
  {
    id: 'bs-civil-engineering',
    category: 'Engineering',
    title: 'BS Civil Engineering',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Usually HSSC Pre-Engineering or equivalent; entry tests and subject requirements apply.',
    overview: 'Learn to plan, design, and assess buildings, transport, and essential infrastructure.',
    studyAreas: ['Structural engineering', 'Geotechnical engineering', 'Transportation engineering', 'Water resources', 'Construction management'],
    careers: ['Site engineer', 'Structural design associate', 'Project engineer', 'Quantity surveyor'],
  },
  {
    id: 'bs-mechanical-engineering',
    category: 'Engineering',
    title: 'BS Mechanical Engineering',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Usually HSSC Pre-Engineering or equivalent; entry tests and subject requirements apply.',
    overview: 'Explore the design, manufacture, and operation of machines and energy systems.',
    studyAreas: ['Engineering mechanics', 'Thermodynamics', 'Fluid mechanics', 'Manufacturing', 'Machine design'],
    careers: ['Mechanical design engineer', 'Manufacturing engineer', 'Maintenance engineer', 'Energy systems associate'],
  },
  {
    id: 'bs-computer-engineering',
    category: 'Engineering',
    title: 'BS Computer Engineering',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Usually HSSC Pre-Engineering or equivalent; entry tests and subject requirements apply.',
    overview: 'Connect hardware and software by studying the systems at the heart of modern computing devices.',
    studyAreas: ['Digital logic design', 'Computer architecture', 'Embedded systems', 'Electronics', 'Computer networks'],
    careers: ['Embedded systems engineer', 'Hardware design associate', 'IoT developer', 'Computer systems engineer'],
  },
  {
    id: 'bs-biotechnology',
    category: 'Health & Life Sciences',
    title: 'BS Biotechnology',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Usually HSSC with biology or a pre-medical background; check university subject requirements.',
    overview: 'Apply biology and technology to research and practical challenges in health, agriculture, and industry.',
    studyAreas: ['Cell and molecular biology', 'Genetics', 'Biochemistry', 'Microbiology', 'Biotechnology laboratory methods'],
    careers: ['Laboratory technologist', 'Research assistant', 'Biotechnology associate', 'Quality control analyst'],
  },
  {
    id: 'bs-microbiology',
    category: 'Health & Life Sciences',
    title: 'BS Microbiology',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Usually HSSC with biology or a pre-medical background; check university subject requirements.',
    overview: 'Study microorganisms and their impact on human health, the environment, and industry.',
    studyAreas: ['Bacteriology and virology', 'Immunology', 'Medical microbiology', 'Environmental microbiology', 'Laboratory techniques'],
    careers: ['Microbiology laboratory assistant', 'Research assistant', 'Quality control analyst', 'Public health laboratory associate'],
  },
  {
    id: 'bs-public-health',
    category: 'Health & Life Sciences',
    title: 'BS Public Health',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; science subjects may be preferred.',
    overview: 'Understand the factors that shape community health and how prevention and policy can improve it.',
    studyAreas: ['Epidemiology', 'Health promotion', 'Biostatistics', 'Environmental health', 'Health systems and policy'],
    careers: ['Public health programme assistant', 'Health education associate', 'Research assistant', 'Community health coordinator'],
  },
  {
    id: 'bs-psychology',
    category: 'Social Sciences & Humanities',
    title: 'BS Psychology',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; admission criteria vary by institution.',
    overview: 'Explore human behaviour, development, and mental processes through research and scientific study.',
    studyAreas: ['Cognitive and social psychology', 'Developmental psychology', 'Research methods', 'Psychological assessment', 'Counselling foundations'],
    careers: ['Research assistant', 'HR associate', 'Community support worker', 'Further study in psychology-related fields'],
  },
  {
    id: 'bs-english',
    category: 'Social Sciences & Humanities',
    title: 'BS English',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; admission criteria vary by institution.',
    overview: 'Develop close-reading, writing, and communication skills through the study of language and literature.',
    studyAreas: ['Literary studies', 'Linguistics', 'Academic writing', 'Communication', 'Research methods'],
    careers: ['Editor', 'Content writer', 'Communications associate', 'Teacher, with relevant further qualifications'],
  },
  {
    id: 'bs-education',
    category: 'Social Sciences & Humanities',
    title: 'BS Education',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; admission criteria vary by institution.',
    overview: 'Study how people learn and how inclusive, effective teaching and learning environments are developed.',
    studyAreas: ['Learning and development', 'Teaching methods', 'Curriculum design', 'Educational assessment', 'Classroom practice'],
    careers: ['Teacher, with required certification', 'Curriculum assistant', 'Education programme associate', 'Learning support coordinator'],
  },
  {
    id: 'bs-media-communication',
    category: 'Social Sciences & Humanities',
    title: 'BS Media & Communication',
    level: 'Undergraduate',
    duration: '4 years · 8 semesters',
    eligibility: 'Intermediate / HSSC or equivalent; admission criteria vary by institution.',
    overview: 'Understand media, audiences, and storytelling across traditional and digital platforms.',
    studyAreas: ['Media theory', 'Journalism and reporting', 'Digital media production', 'Public relations', 'Communication research'],
    careers: ['Content producer', 'Journalist', 'Public relations associate', 'Digital media coordinator'],
  },
];

const categories = [
  'All programs',
  'Computing',
  'Business',
  'Engineering',
  'Health & Life Sciences',
  'Social Sciences & Humanities',
];

export default function Academics() {
  const [filterQuery, setFilterQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All programs');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedProgram) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedProgram(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedProgram]);

  const normalizedQuery = filterQuery.trim().toLowerCase();
  const filteredPrograms = PROGRAMS.filter((program) => {
    const matchesCategory = activeCategory === 'All programs' || program.category === activeCategory;
    const searchableText = [
      program.title,
      program.category,
      program.overview,
      ...program.studyAreas,
      ...program.careers,
    ].join(' ').toLowerCase();

    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  return (
    <section id="academics" className="py-20 sm:py-28 bg-sand dark:bg-espresso-dark px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-brass text-xs font-bold tracking-widest uppercase block mb-3">Find your direction</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-sand tracking-tight mb-4">Explore Degree Programs</h2>
          <p className="text-slate-600 dark:text-sand/70 font-medium text-sm sm:text-base leading-relaxed">
            Browse study areas, typical entry requirements, and career paths. Select any program to see more details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <label className="block">
            <span className="sr-only">Search programs and study areas</span>
            <input
              type="search"
              placeholder="Search programs, subjects, or career paths..."
              className="w-full p-4 bg-sand-card dark:bg-espresso border border-espresso/15 dark:border-sand/15 rounded-xl focus:outline-none focus:border-espresso-light text-sm font-semibold text-slate-800 dark:text-sand placeholder-slate-500 dark:placeholder-sand/45"
              value={filterQuery}
              onChange={(event) => setFilterQuery(event.target.value)}
            />
          </label>

          <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Filter programs by faculty">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-bold transition-colors ${
                  activeCategory === category
                    ? 'bg-espresso text-white shadow-sm dark:bg-brass'
                    : 'bg-sand-card dark:bg-espresso text-slate-700 dark:text-sand/80 border border-espresso/10 dark:border-sand/10 hover:bg-brass/15'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-sand/70 font-medium mb-5" aria-live="polite">
          Showing {filteredPrograms.length} {filteredPrograms.length === 1 ? 'program' : 'programs'}
        </p>

        {filteredPrograms.length > 0 ? (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((program, index) => (
                <motion.button
                  type="button"
                  layout
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: 'easeOut' }}
                  whileHover={prefersReducedMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                  key={program.id}
                  onClick={() => setSelectedProgram(program)}
                  aria-label={`View details for ${program.title}`}
                  className="relative overflow-hidden text-left bg-sand-card dark:bg-espresso p-6 rounded-2xl border border-espresso/10 dark:border-sand/10 border-l-2 border-l-brass/50 shadow-[0_8px_24px_rgba(33,28,24,0.04)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.14)] hover:shadow-[0_18px_42px_rgba(33,28,24,0.12)] dark:hover:shadow-[0_18px_42px_rgba(0,0,0,0.28)] hover:border-brass/50 transition-[border-color,box-shadow] duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-brass/[0.04] transition-colors duration-300 group-hover:bg-brass/[0.09]" aria-hidden="true" />
                  <div className="relative flex justify-between items-start gap-3 mb-6">
                    <span className="px-3 py-1 bg-brass/10 text-brass font-bold text-[10px] uppercase rounded-full tracking-wider ring-1 ring-brass/10">
                      {program.category}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400 dark:text-sand/45" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="relative text-xl font-bold text-slate-900 dark:text-sand mb-3 group-hover:text-espresso-light dark:group-hover:text-brass-light transition-colors">
                    {program.title}
                  </h3>
                  <p className="relative text-slate-600 dark:text-sand/70 text-sm leading-relaxed mb-6 min-h-[4.5rem]">{program.overview}</p>
                  <div className="relative flex items-end justify-between gap-3 border-t border-espresso/10 pt-4">
                    <span className="flex items-start gap-2 text-slate-700 dark:text-sand/85">
                      <FaClock aria-hidden="true" className="mt-0.5 text-brass text-xs" />
                      <span>
                        <span className="block text-[9px] uppercase tracking-[0.15em] font-bold text-slate-400 dark:text-sand/50 mb-1">Typical duration</span>
                        <span className="block text-xs font-bold">{program.duration}</span>
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs text-brass font-bold">
                      Details <FaArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="bg-sand-card dark:bg-espresso border border-espresso/10 dark:border-sand/10 rounded-2xl p-8 text-center">
            <p className="text-slate-800 dark:text-sand font-bold mb-2">No matching programs found</p>
            <p className="text-slate-600 dark:text-sand/70 text-sm">Try another search term or choose a different faculty.</p>
          </div>
        )}

        <p className="max-w-4xl mx-auto mt-10 text-xs text-slate-600 dark:text-sand/65 leading-relaxed text-center">
          Program examples and entry requirements are general guidance, not a confirmed list for Indus Vista University. Availability, eligibility, duration, and accreditation vary by institution and intake. Please confirm details with the university admissions office.
        </p>
      </div>

      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedProgram(null);
            }}
            className="fixed inset-0 z-[60] bg-espresso-dark/75 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="program-dialog-title"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-sand-card dark:bg-espresso rounded-2xl sm:rounded-3xl p-5 sm:p-9 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                aria-label="Close program details"
                className="absolute top-5 right-5 p-2 text-slate-600 dark:text-sand/70 hover:text-slate-900 dark:hover:text-sand rounded-full hover:bg-sand dark:hover:bg-espresso-dark transition-colors"
              >
                <FaTimes aria-hidden="true" />
              </button>

              <span className="inline-block px-3 py-1 bg-brass/10 text-brass font-bold text-[10px] uppercase rounded-full tracking-wider mb-4">
                {selectedProgram.category} · {selectedProgram.level}
              </span>
              <h3 id="program-dialog-title" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-sand tracking-tight pr-8 mb-3">
                {selectedProgram.title}
              </h3>
              <p className="text-slate-700 dark:text-sand/80 leading-relaxed mb-6">{selectedProgram.overview}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-7">
                <div className="bg-sand dark:bg-espresso-dark rounded-xl p-4">
                  <span className="block text-xs text-slate-600 dark:text-sand/60 font-bold uppercase tracking-wider mb-1">Typical duration</span>
                  <span className="text-sm text-slate-900 dark:text-sand font-semibold">{selectedProgram.duration}</span>
                </div>
                <div className="bg-sand dark:bg-espresso-dark rounded-xl p-4">
                  <span className="block text-xs text-slate-600 dark:text-sand/60 font-bold uppercase tracking-wider mb-1">Typical eligibility</span>
                  <span className="text-sm text-slate-800 dark:text-sand/85 leading-relaxed">{selectedProgram.eligibility}</span>
                </div>
              </div>

              <div className="mb-7">
                <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-sand mb-3">
                  <FaBookOpen aria-hidden="true" className="text-brass" /> What you may study
                </h4>
                <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2">
                  {selectedProgram.studyAreas.map((area) => (
                    <li key={area} className="flex gap-2 text-sm text-slate-700 dark:text-sand/80">
                      <span className="text-brass" aria-hidden="true">•</span>{area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-7">
                <h4 className="font-bold text-slate-900 dark:text-sand mb-3">Possible career paths</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.careers.map((career) => (
                    <span key={career} className="px-3 py-1.5 rounded-full bg-brass/10 text-slate-800 dark:text-sand text-xs font-semibold">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-sand/65 leading-relaxed mb-6">
                These are common examples only. Confirm the current curriculum, admission criteria, program availability, and accreditation directly with the university.
              </p>
              <a
                href="#admissions"
                onClick={() => setSelectedProgram(null)}
                className="inline-flex items-center gap-2 bg-espresso hover:bg-espresso-light text-white font-bold px-5 py-3 rounded-xl transition-colors"
              >
                Go to admissions <FaArrowRight aria-hidden="true" className="text-xs" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
