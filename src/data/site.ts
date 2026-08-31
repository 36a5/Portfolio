/** Single source of truth for identity, links, and navigation. */
export const site = {
  name: 'Abdulrhman Salamah',
  nameArabic: 'عبدالرحمن سلامة',
  role: 'Machine Learning & Software Engineer',
  tagline:
    'Data Science graduate from King Saud University building machine-learning systems, agentic AI, and the software around them.',
  location: 'Riyadh, Saudi Arabia',
  email: 'abdulrhman.salamah1@gmail.com',
  github: 'https://github.com/36a5',
  linkedin: 'https://www.linkedin.com/in/abdulrahman-salamah-7b4478215/',
  /** Drop a PDF at public/cv/ and put the file name here to show the download button. */
  cvFile: null as string | null,
  description:
    'Portfolio of Abdulrhman Salamah — machine learning, computer vision, agentic AI, and full-stack projects.',
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
