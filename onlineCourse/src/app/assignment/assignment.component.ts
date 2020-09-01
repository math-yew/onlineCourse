import { Component, OnInit } from '@angular/core';

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
  studentList: Student[];

  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit(): void {
    this.getAssignments();
    this.getStudents();
  }

potato:string = "chips";

  getAssignments(): void{
    this.assignmentService.getAssignments()
      .subscribe(a => this.assignmentList = a);
  }

  getStudents(): void{
    this.assignmentService.getStudents()
      .subscribe(s => this.studentList = s)
  }

}

console.log("HI");
