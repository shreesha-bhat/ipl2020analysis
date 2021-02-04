import { Component, OnInit } from '@angular/core';
import {IplserviceService} from '../iplservice.service'
import { GoogleChartInterface } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import {AuthServiceService} from '../auth/auth-service.service'
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamDetails;
  teamStat;
  tableChart:GoogleChartInterface;
  columnChart:GoogleChartInterface;
  pieChart:GoogleChartInterface;
  constructor(private iplService:IplserviceService,private authservice:AuthServiceService) { }

  ngOnInit(): void {
    this.iplService.teamDetails().subscribe(res => {
      this.teamDetails = res["Team Details"];
      let data = [];
      data.push(["Label", "Team", "City", "Coach","Home"]);
      for (let t of this.teamDetails) {
        data.push([t["Label"], t["Team"], t["City"], t["Coach"], t["Home Ground"]]);
      }
      this.showTableChart(data);
    })

    this.iplService.allTeamount().subscribe(res => {
      this.teamStat = res["Team amount"];
      let data = [];
      data.push(["Team","Amount"]);
      for (let t of this.teamStat) {
        data.push([t["_id"], t["Sum"]]);
      }
      this.showColumnChart(data);
    })
  }
  showTableChart(data){
    this.tableChart ={
      chartType:"Table",
      dataTable:data,
      options:{allowHtml: true,
        width:800,
        height:600}
    }
  }

  showColumnChart(data){
    this.columnChart ={
      chartType:"ColumnChart",
      dataTable:data,
      options:{title: 'Teams',
      width:700,
      height:600}
    }
}
clickEvent(){
  this.authservice.logOut()
}
}
