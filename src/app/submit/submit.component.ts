import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

	sub:any = {};
	problemCode:string = '';

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  	this.sub.route = this.route.params.subscribe(params => {
  		this.problemCode = params['problemCode'];
  	});
  }

  ngOnDestroy() {
  	this.sub.route.unsubscribe();
  }

}
