import { Component, OnInit } from '@angular/core';
import { ContestsService } from './../_services/index'

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {

  public contestsData;

    //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

  games = [
    {
      "id":"1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },{
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },{
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },{
      "id":"10",
      "name": "Witcher Assasins on King",
      "genre": "Adventure"
    }
  ]

  constructor(private contestsService: ContestsService) {
    // this.populate();
  }

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
