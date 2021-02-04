import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthServiceService} from '../auth/auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = false;
  loginform: FormGroup;
  logindata: string;
  token: string;
  userdata: string;
  errormessage: string;
  tokendata: string;
  
  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router) {

  }


  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginform.controls[controlName].hasError(errorName);
  }
  get username() {
    return this.loginform.get('username');
  }
  get password() {
    return this.loginform.get('password');
  }


  confirmcredentials() {
    this.authService.getAuthenticated(this.loginform.value.username, this.loginform.value.password).subscribe(data => {
      if (data["status"] != '401'&&data["statusText"]!='Unknown Error') {
        this.router.navigateByUrl('/player');
      } else {
        this.errormessage = "Email or Password do not Match.";
        setTimeout(() => {
          this.errormessage = undefined;
        }, 3000);
      }
    }
    )
  }

}
