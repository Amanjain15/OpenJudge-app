import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {

	contestCode:string;
	sub:any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  		this.sub.route = this.route.params.subscribe(params => {
  			this.contestCode = params['contestCode'];
    });
  }

  ngOnDestroy() {
  	this.sub.route.unsubscribe();
  }
}
