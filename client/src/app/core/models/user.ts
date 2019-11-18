export interface ILoginUserData {
  userEmail: string;
  userPassword: string;
}

export interface IName {
  first: string;
  last?: string;
  middle?: string;
}

export interface IUser {
  id: string;
  name: IName;
  photo?: string;
}

export class User implements IUser {
  readonly id;
  public name;
  public photo;

  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.photo = user.photo;
  }
}
