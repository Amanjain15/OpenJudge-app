import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProblemService } from '../_services/index'

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

	sub:any = {};
	problemCode:string = "";
	problem:any = {};

  constructor(private route:ActivatedRoute, private problemService: ProblemService) { }

  ngOnInit() {
  	this.sub.route = this.route.params.subscribe(params => {
  		this.problemCode = params['problemCode'];
  	})

  	this.problem = this.problemService.getProblem(this.problemCode).subscribe(response => {
  		if(response.success){
  			this.problem = response.problem;
  			console.log(response.problem);
  		}
  	});
  }

  ngOnDestroy() {
  	this.sub.route.unsubscribe();
  }

}
