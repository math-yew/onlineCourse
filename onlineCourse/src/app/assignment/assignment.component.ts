import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AssignmentsService } from '../assignments.service';
import { Assignment } from "../assignment";
import { Student } from "../student";


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.sass','../app.component.sass']
})
export class AssignmentComponent implements OnInit {

  assignmentList: Assignment;
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

  getAssignments(): void{

    console.log("CONST ID: " + this.route.snapshot.paramMap.get("id"))
    const id: any = this.route.snapshot.paramMap.get("id");
    this.assignmentService.getAssignments()
      .subscribe(a => {
        this.assignmentList = a[id - 1];
        console.log("ASSIGNMENT LIST: " + JSON.stringify(this.assignmentList))
      });
  }

  getStudents(): void{
    this.assignmentService.getStudents()
      .subscribe(s => this.studentList = s)
  }

  submitAssignment(): void{
    this.turnedIn = this.assignmentList;
    this.turnedIn.student = this.studentName;

    let correctNumber = 0;
    this.assignmentList.questions.map(q => {
      delete q.choices;
      if(q.answer == q.correctAnswer) correctNumber++;
    });
    this.turnedIn.grade = correctNumber/this.assignmentList.questions.length;
    console.log("turnedIn: " + JSON.stringify(this.turnedIn));

    this.assignmentService.submitAssignment(this.turnedIn);
      // .subscribe(calc => this.setVariables(calc));
}

}

console.log("Matt");
