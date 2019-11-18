import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthorizationService } from '../../core/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthorizationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const email = this.loginForm.value.userEmail;
    const password = this.loginForm.value.userPassword;
    this.authService.login(email, password);
    console.log('form submitted');
    this.router.navigate(['course']);
  }

}
