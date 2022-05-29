export type TAuthRequest = {
  login: string
  password: string
}

export type TAuthResponse = {
  token: TToken;
}

export type TToken = {
  id: string;
  [tokenField: string]: any
}

