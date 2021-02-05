import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterceptorService} from './auth/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { BiddingComponent } from './bidding/bidding.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'; 



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    BiddingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,    
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
