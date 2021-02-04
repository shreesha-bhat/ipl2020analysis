import { Component, OnInit } from '@angular/core';
import {IplserviceService} from '../iplservice.service'
import { GoogleChartInterface } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import {AuthServiceService} from '../auth/auth-service.service'



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  teamNames;
  teamName;
  players;
  datasource =[]
  pieChart:GoogleChartInterface;
  tableChart:GoogleChartInterface;
  playerscolumns :string[] =['Name','Role','Label','Price']

  constructor(private iplService:IplserviceService,private authservice:AuthServiceService) { }

  ngOnInit(): void {
    this.iplService.teamLabels().subscribe(res=>{
      this.teamNames=res['Team Labels'];
    })
  }
  getPlayers(event){
    this.teamName = event.value;
    if(this.teamName && this.teamName.length > 0){
      this.iplService.getPlayersByTeamName(this.teamName).subscribe(res=>{
        this.players = res["Team players Detail"];
        this.datasource = this.players
        
      })
      this.iplService.getTeamRoleStat(this.teamName).subscribe(res=>{
        let role_count = res["Team players Detail"];
        let data = [];
        data.push(["Role","Count"]);
        for(let s of role_count){
          data.push([s["_id"],s["count"]]);
        }
        this.showRoleStatChart(data);
      }
        )
    }
  }

  showRoleStatChart(data){
    this.pieChart ={
      chartType:"PieChart",
      dataTable:data,
      options:{'Role':'Count',
      width:700,
      height:600}
    }
  }

  onChartSelect(event:ChartSelectEvent){
    let role = event.selectedRowFormattedValues[0];
    console.log(role);
    
    this.iplService.getPlayerByTeamAndRole(this.teamName,role).subscribe(res=>{
      let players = res["Team players Detail"];
      let data =[];
      data.push(["Players","Team","Role","Price"]);
      for(let p of players){
        data.push([p["Name"],p["Label"],p["Role"],p["Amount"]]);
      }
      this.showTableChart(data);
        
    })
    }
    showTableChart(data){
      this.tableChart ={
        chartType:"Table",
        dataTable:data,
        options:{allowHtml: true,
          width:400,
          height:400}
      }
    }

    clickEvent(){
      this.authservice.logOut()
    }
}
