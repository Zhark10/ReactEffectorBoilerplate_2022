import { TProfile } from "../profile/types";

export type TAuthRequest = {
  login: string
  password: string
}

export type TAuthResponse = {
  token: TToken;
  profile: TProfile | null;
}

export type TToken = {
  id: string;
  [tokenField: string]: any
}

