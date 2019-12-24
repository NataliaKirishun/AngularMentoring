import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../store';
import { LoginPageActions } from 'src/app/store/auth-store/actions';

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
    private store: Store<RootStoreState.State>
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
    this.store.dispatch(LoginPageActions.login(this.loginForm.value));
  }
}
