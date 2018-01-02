import { Component, OnInit } from '@angular/core';
import { ContestsService } from './../_services/index'

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {

  contestsData: Array<any> = [];

  constructor(private contestsService: ContestsService) {}

  ngOnInit() {
    this.populate();
  }

  populate() {
    console.log("populate");
    this.contestsService.getContests().subscribe(reponse => {
      console.log(reponse);
      this.contestsData = reponse.contests;
      console.log(this.contestsData);
      // this.contestsData.map({

      // });
    });
  }
}
