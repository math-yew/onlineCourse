import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import { Assignment } from "./assignment";
import { Result } from "./result";
import { Student } from "./student";
import { ASSIGNMENTLIST } from "./assignmentList";
import { RESULTSLIST } from "./resultsList";
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

  getResultsList(): Observable<Result[]>{
    return of(RESULTSLIST);
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

  submitAssignment(r): void{
    RESULTSLIST.push(r);
  }
}
