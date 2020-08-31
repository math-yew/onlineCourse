import { Component, OnInit } from '@angular/core';

import { Assignment } from "../assignment";
import { ASSIGNMENTLIST } from "../assignmentList";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.sass']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  assignmentList = ASSIGNMENTLIST;

  // console.log("Hello");
}

console.log("HI");
