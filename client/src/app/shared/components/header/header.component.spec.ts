import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Router} from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';
import { AuthorizationService } from '../../../core/authorization/authorization.service';
import { User } from '../../../core/models/user';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authorizationService: AuthorizationService;
  let AuthorizationServiceStub: Partial<AuthorizationService>;

  const testUser = {
    id: 'dsdkwo8ewe',
    name: {
      first: 'John',
      last: 'Doe',
      middle: '',
    },
    photo: 'https://im0-tub-ru.yandex.net/i?id=4293fa842466b4a7a939a126ce990ad0-l&n=13',
  };
  const testToken = 'testToken';

  beforeEach(async(() => {
    AuthorizationServiceStub = {
      get authToken() {
        return testToken;
      },
      isAuth: () => !!testToken,
      get user(): User {
        return testUser;
      },
      set user(testUser: User) {},
      login: () => {},
      setTokenToLocalStorage: () => {},
      getUserInfo: () => {},
      logout: () => {},
    };

    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
      ],
      providers: [
        {provide: AuthorizationService, useValue: AuthorizationServiceStub},
        { provide: Router, useValue: routerSpy },
        ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authorizationService = fixture.debugElement.injector.get(AuthorizationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
