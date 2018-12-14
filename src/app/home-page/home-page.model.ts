export interface IUserModel
{
  email: string;
  firstname: string;
  lastname: string;
  userID: number;
  username:string
}

export interface IEvent
{
  eventID: number;
  start: Date;
  end: Date;
  userID: number;
  name:string
}

