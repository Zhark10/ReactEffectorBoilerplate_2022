export type TProfileResponse = {
  user: TUser;
  // settings: {...}
}

export type TUser = {
  id: number;
  firstName: string;
  secondName: string;
  age: number;
  description: string;
}
