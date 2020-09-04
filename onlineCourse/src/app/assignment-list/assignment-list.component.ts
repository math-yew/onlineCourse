import { Component, OnInit } from '@angular/core';

import { Assignment } from "../assignment";
import { AssignmentsService } from '../assignments.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.sass']
})
export class AssignmentListComponent implements OnInit {

  assignmentList: Assignment[];

  constructor(
    private assignmentService: AssignmentsService
  ) { }

  ngOnInit(): void {
    this.getAssignments()
  }

  getAssignments(): void{
    this.assignmentService.getAssignments()
      .subscribe(a => {
        this.assignmentList = a;
      });
  }
}
