import { AxiosResponse } from "axios";
import { http } from "../../configs/http"
import { TAuthRequest, TAuthResponse } from "./types"

const URL = '/auth';

const signIn = ({ login, password }: TAuthRequest) => {
  return http.post<
    TAuthRequest,
    AxiosResponse<TAuthResponse, TAuthRequest>
  >(URL, { login, password }).then(response => ({
    // IN A REAL PROJECT THERE WILL BE A TOKEN HERE (response.data.token)
    token: { id: `TOKEN_ID__${Object.values(response.data).join('_')}` }
  }))
};

export const AuthApi = {
  signIn,
}