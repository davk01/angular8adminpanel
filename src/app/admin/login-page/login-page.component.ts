import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from '../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup
  submitted = false
  massage: string
  constructor(
    public auth: AuthService,
    private router: Router,
    private  routa: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.routa.queryParams.subscribe((params: Params) => {
      if(params['loginAgain']){
        this.massage = 'napishit polya deebil'
      } else if (params['authFailed']) {
        this.massage = ' sesisya istekla. vidite dani zanova'
      }
    })
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }
  submit(){
    if(this.form.invalid){
      return
    }
    this.submitted = true
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
      this. submitted = false
    }, () => {
      this.submitted = false
    })
  }
}
