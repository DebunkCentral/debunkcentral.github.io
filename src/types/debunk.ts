export type TruthLevel = 'true' | 'mostly-true' | 'mixed' | 'mostly-false' | 'false';

export interface Quote {
  text: string;
  author: string;
  credential: string;
}

export interface Source {
  title: string;
  url: string;
}

export interface Debunk {
  id: string;
  title: string;
  claim: string;
  summary: string;
  analysis: string;
  facts: string;
  conclusion: string;
  truthLevel: TruthLevel;
  categories: string[];
  date: string;
  imageUrl: string;
  originalSourceUrl: string;
  quotes?: Quote[];
  sources: Source[];
}

export interface Category {
  name: string;
  description: string;
  imageUrl: string;
  count: number;
}