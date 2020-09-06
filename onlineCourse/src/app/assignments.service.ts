import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import { Assignment } from "./assignment";
import { Student } from "./student";
import { ASSIGNMENTLIST } from "./assignmentList";
import { STUDENTLIST } from "./studentList";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor() { }

  getAssignments(): Observable<Assignment[]>{
    console.log("getAssignments: " + JSON.stringify(ASSIGNMENTLIST))
    return of(ASSIGNMENTLIST);
  }

  getStudents(): Observable<Student[]>{
    return of(STUDENTLIST);
  }

  createAssignment(a): void{
    console.log("a.id pre: " + a.id);
    a.id = ASSIGNMENTLIST.length + 1;
      console.log("a.id post: " + a.id);
    ASSIGNMENTLIST.push(a);
  }
}
