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
    this.name = {
      first: user.name.first,
      last: user.name.last,
      middle: user.name.middle,
    };
    this.photo = user.photo;
  }
}
