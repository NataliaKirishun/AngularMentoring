import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../store';
import { LoginPageActions } from '../../store/auth-store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  public loginForm: FormGroup;
  public aSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<RootStoreState.State>
  ) {
    this.loginForm = fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.loginForm.disable();
    this.store.dispatch(LoginPageActions.login(this.loginForm.value));
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
