import { Assignment } from "./assignment";

export const ASSIGNMENTLIST: Assignment[] = [
  {
    id: 1,
    title: "PJ Sandwich",
    description: "Learn how to make a sandwich.",
    instruction: "",
    videoLink: "",
    questions: [
      {
        qid: 1,
        question: "What kind of bread?",
        correctAnswer: "White",
        answer: "",
        choices: ["Rye", "Sourdough", "White", "Flatbread"]
        // choices: [["Rye", false],["Sourdough", false],["White", true],["Flatbread",false]]
      },
      {
        qid: 2,
        question: "What subastance accompanies the PB?",
        correctAnswer: "User Discretion",
        answer: "",
        choices: ["User Discretion", "Jam", "Jelly", "Honey"]
        // choices: [["User Discretion", true],["Jam", false],["Jelly", false],["Honey",false]]
      }
    ]
  },
  {
    id: 2,
    title: "Tie your shoes",
    description: "Learn how to ties both your left and right shoe.",
    instruction: "",
    videoLink: "",
    questions: [
      {
        qid: 1,
        correctAnswer: "Either",
        answer: "",
        question: "Which foot first?",
        choices: ["Left", "Rigth", "Either", "Neither"]
        // choices: [["Left", false],["Rigth", false],["Either", true],["Nether",false]]
      }
    ]
  }
]
