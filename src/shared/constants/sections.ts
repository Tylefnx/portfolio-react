export const SECTIONS = [
  { id: 'home', index: 0 },
  { id: 'about', index: 1 },
  { id: 'portfolio', index: 2 },
  { id: 'services', index: 3 },
  { id: 'contact', index: 4 },
] as const;

export type SectionId = typeof SECTIONS[number]['id'];
