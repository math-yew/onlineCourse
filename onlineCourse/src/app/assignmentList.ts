import { Assignment } from "./assignment";

export const ASSIGNMENTLIST: Assignment[] = [
  {
    id: 1,
    title: "PJ Sandwich",
    description: "Learn how to make a sandwich.",
    questions: [
      {
        qid: 1,
        type: "multiple",
        question: "What kind of bread?",
        choices: [["Rye", false],["Sourdough", false],["White", true],["Flatbread",false]]
      },
      {
        qid: 2,
        type: "multiple",
        question: "What subastance accompanies the PB?",
        choices: [["User Discretion", true],["Jam", false],["Jelly", false],["Honey",false]]
      }
    ]
  },
  {
    id: 2,
    title: "Tie your shoes",
    description: "Learn how to ties both your left and right shoe.",
    questions: [
      {
        qid: 1,
        type: "multiple",
        question: "Which foot first?",
        choices: [["Left", false],["Rigth", false],["Either", true],["Nether",false]]
      }
    ]
  }
]
