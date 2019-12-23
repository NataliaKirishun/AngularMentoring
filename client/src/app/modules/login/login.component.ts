import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../core/authorization/authorization.service';
import { Subscription } from 'rxjs';
import { LogIn } from '../../store/auth-store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public aSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.loginForm.disable();
    this.store.dispatch(new LogIn(this.loginForm.value));
    this.loginForm.enable();
  }
}
