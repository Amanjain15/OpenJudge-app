import { Component, OnInit } from '@angular/core';
import { ContestsService } from './../_services/index'

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {

  public contestsList: Array<any> = [];

    //sorting
  key: string = 'startTime';
  format: string = 'MMM dd yyyy hh:mm a';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

  constructor(private contestsService: ContestsService) {
    // this.populate();
  }

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.contestsService.getContests().subscribe(reponse => {
      this.contestsList = reponse.contests;
      console.log(this.contestsList);
      // this.contestsData.map({

      // });
    });
  }
}
