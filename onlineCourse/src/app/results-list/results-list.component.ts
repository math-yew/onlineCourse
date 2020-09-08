import { Component, OnInit } from '@angular/core';

import { AssignmentsService } from '../assignments.service';
import { Result } from '../result';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.sass']
})
export class ResultsListComponent implements OnInit {

  resultsList: Result[];

  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit(): void {
    this.getResultsList();
  }

  getResultsList(): void{
    this.assignmentService.getResultsList()
      .subscribe(r => {
        this.resultsList = r;
      });
  }

}
