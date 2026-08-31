/** Single source of truth for identity, links, and navigation. */
export const site = {
  name: 'Abdulrhman Salamah',
  nameArabic: 'عبدالرحمن سلامة',
  role: 'AI & Machine Learning Engineer',
  tagline:
    'I build AI systems that make it past the demo and into daily use: agentic workflows, retrieval pipelines and machine-learning models for messy real-world data — especially Arabic, where most ready-made tools quietly break.',
  location: 'Riyadh, Saudi Arabia',
  email: 'abdulrhman.salamah1@gmail.com',
  github: 'https://github.com/36a5',
  linkedin: 'https://www.linkedin.com/in/abdulrahman-salamah-7b4478215/',
  /**
   * Drop a PDF at public/cv/ and put the file name here to show the download button.
   * Deliberately unset: the CV versions supplied carry a personal phone number, a home
   * address and seven named referees' direct contact details. A public download needs a
   * copy with those removed.
   */
  cvFile: null as string | null,
  description:
    'Portfolio of Abdulrhman Salamah — AI and machine learning engineer in Riyadh. Agentic AI, retrieval pipelines, computer vision and predictive maintenance.',
} as const;

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Now', path: '/now' },
  { label: 'About', path: '/about' },
] as const;

/** Prefix an internal path with the configured base path. */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
