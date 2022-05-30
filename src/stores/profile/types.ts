export type TProfileRequest = {
  user: TUser | null;
  // settings: {...}
}

export type TProfileResponse = {
  user: TUser | null;
  // settings: {...}
}

export type TUser = {
  id: number;
  firstName: string;
  secondName: string;
  age: number;
  description: string;
}
