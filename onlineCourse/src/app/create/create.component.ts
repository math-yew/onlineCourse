import { Component, OnInit } from '@angular/core';

import { AssignmentsService } from '../assignments.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass','../app.component.sass']
})
export class CreateComponent implements OnInit {

  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;

  questionList: {
    id: number;
    title: string;
    description: string;
    instruction: string;
    videoLink: string;
    questions: any;
  };

  questionObj: {
    qid: number;
    question: string;
    correctAnswer: string;
    choices: string[];
  }

  constructor(
    private assignmentService: AssignmentsService
  ) { }

  ngOnInit(): void {
    this.questionList = {
      id: 0,
      title: "Title",
      description: "Description",
      instruction: "Write your instructions here.",
      videoLink: "Youtube video link",
      questions: []
    };

    this.clear();
  }

  clear(): void{
    this.questionObj=  {
      qid: 0,
      question: "",
      correctAnswer: "",
      choices: [""]
    };

    this.choice1 = "";
    this.choice2 = "";
    this.choice3 = "";
    this.choice4 = "";
  }

  add(): void{
    let obj = {...this.questionObj};
    obj.choices = [this.choice1,this.choice2,this.choice3,this.choice4];
    obj.qid = this.questionList.questions.length + 1;
    if(!!obj.question && !!obj.correctAnswer && !!this.choice1 && !!this.choice2 && !!this.choice3 && !!this.choice4) {
      this.questionList.questions.push(obj);
      console.log("OBJECT: " + JSON.stringify(this.questionList));
      this.clear();
    }

  }

  createAssignment(): void{
    this.assignmentService.createAssignment(this.questionList);
  }
}
