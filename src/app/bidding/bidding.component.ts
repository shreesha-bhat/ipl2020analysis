import { Component, OnInit } from '@angular/core';
import {IplserviceService} from '../iplservice.service'
import {AuthServiceService} from '../auth/auth-service.service'

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {
  maxplayers;
  sorted;
  wicketkeeper;
    ;
  bolwer;
  allrounder;
  constructor(private iplservice:IplserviceService,private authservice:AuthServiceService) { }

  ngOnInit(): void {
    this.iplservice.max_players().subscribe(res =>{
      this.maxplayers = res["max players"]
    })
      
    this.iplservice.sorted_players().subscribe(res =>{
      this.sorted = res["Sorted players"]
    })
  }
  clickEvent(){
    this.authservice.logOut()
  }
}
