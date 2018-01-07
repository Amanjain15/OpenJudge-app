import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContestService } from '../_services/index'

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {

	contestCode:string;
	sub:any = {};
  contest:any = {};
  problemList: Array<any> = [];

  constructor(private route: ActivatedRoute, private contestService: ContestService) { }

  ngOnInit() {
  		this.sub.route = this.route.params.subscribe(params => {
  			this.contestCode = params['contestCode'];
      });

      this.contestService.getContest(this.contestCode).subscribe(response => {
        if (response.success) {
          console.log(response);
          this.problemList = response.problems;
          this.contest = response.contest;
        }
      });
  }

  ngOnDestroy() {
  	this.sub.route.unsubscribe();
  }
}
