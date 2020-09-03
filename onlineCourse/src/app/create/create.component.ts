import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  // title: string;
  // description: string;
  // instruction: string;
  // videoLink: string;
  // question: string;
  // correctAnswer: string;
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

  constructor() { }

  ngOnInit(): void {
    this.questionList = {
      title: "mm",
      description: "mm",
      instruction: "mm",
      videoLink: "mm",
      questions: []
    };

    // this.questionObj=  {
    //   question: "mm",
    //   correctAnswer: "mm",
    //   choices: [this.choice1,this.choice2,this.choice3,this.choice4]
    // };
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
    this.questionList.questions.push(obj);
    console.log("OBJECT: " + JSON.stringify(this.questionList));
    this.clear();
  }

}
