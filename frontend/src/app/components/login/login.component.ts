import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    this.loginForm = this.fb.group({
      UserName: new FormControl(),
      Password: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.loginForm);
  }
}
