/**
 * Résumé facts that are not collections: education, awards, skills, languages.
 * Anything with its own page or card lives in src/content/ instead.
 */

export const education = [
  {
    degree: 'BSc Applied Information Systems — Data Science track',
    institution: 'King Saud University',
    period: 'August 2021 — January 2026',
    details: [
      'GPA 4.80 / 5.00 — Excellent with First Class Honours.',
      'Ranked 1st of 21 graduates in the major.',
    ],
  },
] as const;

export const awards = [
  {
    title: "'Ideal Student' of the College of Applied Computer Sciences",
    issuer: 'King Saud University',
    year: '2025',
  },
  {
    title: "Dean's Award for Excellence, three consecutive years",
    issuer: 'King Saud University',
    year: '1444–1447 AH',
  },
  {
    title: "First place, Applied Computer Science graduation projects competition (Emma'a)",
    issuer: 'King Saud University',
    year: '2025',
  },
  {
    title: 'Two certificates of appreciation, one from the Senior Vice President of Power Systems',
    issuer: 'Saudi Aramco',
    year: '2025',
  },
] as const;

export const skillGroups = [
  {
    label: 'Generative and agentic AI',
    items: [
      'LLM APIs',
      'LangChain',
      'LangGraph',
      'RAG',
      'Vector databases and embeddings',
      'Autonomous agents',
      'Tool and function calling',
      'Prompt engineering',
      'Multi-agent systems',
      'Fine-tuning',
    ],
  },
  {
    label: 'Machine learning',
    items: [
      'Supervised and unsupervised learning',
      'Deep learning',
      'NLP',
      'Computer vision',
      'Time-series forecasting',
      'Feature engineering',
      'Model evaluation',
    ],
  },
  {
    label: 'Programming languages',
    items: ['Python', 'R', 'SQL', 'Java', 'C++', 'PHP', 'JavaScript'],
  },
  {
    label: 'Tools and libraries',
    items: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'pandas',
      'NumPy',
      'OpenCV',
      'MediaPipe',
      'Streamlit',
    ],
  },
  {
    label: 'Data and BI',
    items: ['Power BI', 'DAX', 'SQL Server', 'MySQL', 'Matplotlib'],
  },
  {
    label: 'Engineering',
    items: ['Node.js', 'REST APIs', 'HTML, CSS, JavaScript', 'Git and GitHub'],
  },
] as const;

export const spokenLanguages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Full professional' },
] as const;
