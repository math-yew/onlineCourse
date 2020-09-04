import { Component, OnInit } from '@angular/core';

import { AssignmentsService } from '../assignments.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;

  questionList: {
    title: string;
    description: string;
    instruction: string;
    videoLink: string;
    questions: any;
  };

  questionObj: {
    question: string;
    correctAnswer: string;
    choices: string[];
  }

  constructor(
    private assignmentService: AssignmentsService
  ) { }

  ngOnInit(): void {
    this.questionList = {
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
