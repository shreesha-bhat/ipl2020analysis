import { Component, OnInit } from '@angular/core';
import {IplserviceService} from '../iplservice.service'
import {AuthServiceService} from '../auth/auth-service.service'
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {
  lowValue = 0
  highValue = 10
  rowsOnPage = 10
  maxplayers;
  sorted;
  wicketkeeper;
  bolwer;
  allrounder;
  playerscolumns :string[] =['Name','Role','Label','Price']
  datasource = []
  constructor(private iplservice:IplserviceService,private authservice:AuthServiceService) { }

  ngOnInit(): void {
    this.iplservice.max_players().subscribe(res =>{
      this.maxplayers = res["max players"]
    })
      
    this.iplservice.sorted_players().subscribe(res =>{
      this.datasource = res["Sorted players"]
    })
  }
  clickEvent(){
    this.authservice.logOut()
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
