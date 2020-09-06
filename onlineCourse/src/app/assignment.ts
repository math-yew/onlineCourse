export interface Assignment {
  id: number;
  title: string;
  description: string;
  instruction: string;
  videoLink: string;
  questions: { qid: number; question: string; correctAnswer: string; answer: string; choices: string[]; }[];
}
