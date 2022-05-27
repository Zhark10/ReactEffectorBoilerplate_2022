import {AxiosResponse} from "axios";
import {http} from "../../configs/http"
import {TAuthRequest, TAuthResponse} from "./types"

const URL = '/auth';

// const signIn = ({ login, password }: TAuthRequest) => {
//   return http.post<
//     TAuthRequest,
//     AxiosResponse<TAuthResponse, TAuthRequest>
//   >(URL, { login, password }).then(response => response.data)
// };

const signIn = ({ login, password }: TAuthRequest) => {
  return http.get<
    TAuthRequest,
    AxiosResponse<TAuthResponse, TAuthRequest>
  >(URL).then(response => response.data)
};

export const AuthApi = {
  signIn,
}