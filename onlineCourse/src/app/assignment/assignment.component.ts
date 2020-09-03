import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AssignmentsService } from '../assignments.service';
import { Assignment } from "../assignment";
import { Student } from "../student";


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.sass']
})
export class AssignmentComponent implements OnInit {

  assignmentList: Assignment[];
  turnedIn: any;
  studentList: Student[];
  studentName: string = "Matt";


  constructor(
    private assignmentService: AssignmentsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAssignments();
    this.getStudents();
  }

potato:string = "chips";

  getAssignments(): void{
    this.assignmentService.getAssignments()
      .subscribe(a => {
        this.assignmentList = a;
      });
  }

  getStudents(): void{
    this.assignmentService.getStudents()
      .subscribe(s => this.studentList = s)
  }

  submitAssignment(): void{
    this.turnedIn = this.assignmentList[0];
    this.turnedIn.student = this.studentName;
    // for(let question of this.turnedIn.questions){
    //   console.log(question.qid + question.answer);
    // }
    this.turnedIn.questions = this.assignmentList[0].questions.map(q => delete q.choices);
    console.log("turnedIn 1: " + this.turnedIn.questions[0].turnedIn);
    console.log("answer 2: " + this.turnedIn.questions[0].answer);
    console.log("student: " + this.turnedIn.questions[0].answer);
    console.log("student: " + this.turnedIn.questions[0].choices[0]);
    // this.assignmentService.submitAssignment(this.calc);

  // const id = this.route.snapshot.paramMap.get("id");
  // this.calcService.updateCalc(id)
  //   .subscribe(calc => this.setVariables(calc));
}

}

console.log("Matt");
