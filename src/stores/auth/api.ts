import {AxiosResponse} from "axios";
import {http} from "../../configs/http"
import {TAuthRequest, TAuthResponse} from "./types"

const URL = '/auth';

const signIn = ({ login, password }: TAuthRequest) => {
  return http.post<
    TAuthRequest,
    AxiosResponse<TAuthResponse, TAuthRequest>
  >(URL, { login, password }).then(response => {
    console.log('response.data', response.data)
    return {
      token: { id: "SMTH_TOKEN_STRING" }
    }
  })
};

export const AuthApi = {
  signIn,
}