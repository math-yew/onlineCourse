export interface Assignment {
  id: number;
  title: string;
  description: string;
  questions: { qid: number; type: string; question: string; choices: (string | boolean)[][]; }[];
}
