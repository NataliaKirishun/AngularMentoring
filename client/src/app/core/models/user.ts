export interface  IToken {
  token: string;
}

export interface ILoginUserData {
  login: string;
  password: string;
}

export interface IName {
  first: string;
  last?: string;
  middle?: string;
}

export interface IUser {
  id: number;
  token: string;
  name: IName;
  login: string;
  password: string;
}

export class User implements IUser {
  readonly id;
  readonly token;
  public name;
  readonly login;
  readonly password;

  constructor(user: Partial<IUser>) {
    Object.assign(this, user);
  }
}

