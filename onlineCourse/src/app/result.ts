export interface Result {
  id: number;
  title: string;
  description: string;
  instruction: string;
  videoLink: string;
  student: string;
  grade: number;
  questions: {
    qid: number;
    question: string;
    correctAnswer: string;
    answer: string;
  }[];
}
