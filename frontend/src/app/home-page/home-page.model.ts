export interface IUserModel
{
  email: string;
  firstname: string;
  lastname: string;
  userID: number;
  username:string;
  password:string;
}

export interface IEvent
{
  eventID: number;
  start: Date;
  end: Date;
  userID: number;
  name:string
}


export interface IGroup {
    groupID: number;
    userID: number;
    creatorName: string;
    groupName: string;
    description: string;
}
