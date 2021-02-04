import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IplserviceService {

  baseUrl ="http://127.0.0.1:5000/ipl/";
  constructor(private http:HttpClient) { }
  
  teamLabels():Observable<any>{
    let url = `${this.baseUrl}labels`;
    return this.http.get(url);

  }

  getPlayersByTeamName(teamName):Observable<any>{
    let url = `${this.baseUrl}teamplayers/${teamName}`;
    return this.http.get(url)
  }

  getTeamRoleStat(teamname):Observable<any>{
    let url =`${this.baseUrl}teamroles/${teamname}`;
    return this.http.get<any>(url)
  }

  getPlayerByTeamAndRole(teamname,role):Observable<any>{
    let url = `${this.baseUrl}team/${teamname}/${role}`;
    return this.http.get<any>(url);
  }

  teamDetails():Observable<any>{
    let url = `${this.baseUrl}teamdetails`;
    return this.http.get(url);
  }
  allTeamount():Observable<any>{
    let url = `${this.baseUrl}allamount`;
    return this.http.get(url);
  }

  max_players():Observable<any>{
    let url = `${this.baseUrl}team/maxplayers`;
    return this.http.get(url);
  }

  sorted_players():Observable<any>{
    let url = `${this.baseUrl}players/sort`;
    return this.http.get(url);
  }
}
