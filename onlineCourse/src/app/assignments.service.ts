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
    return of(ASSIGNMENTLIST);
  }

  getStudents(): Observable<Student[]>{
    return of(STUDENTLIST);
  }
}
