import {AxiosResponse} from "axios";
import {DeepPartial} from "react-hook-form";
import {http} from "../../configs/http";
import { ProfileDTO } from "./dto";
import { TUser } from "./types";

const URL = '/profile';

const get = () => {
  return http.get<
    AxiosResponse<TUser>
  >(URL).then(response => response.data)
};

const update = (data: any) => {
  return http.put<
    DeepPartial<TUser>,
    AxiosResponse<TUser, DeepPartial<TUser>>
    >(`${URL}/${data.id}`, ProfileDTO(data)).then(response => response.data);
};

export const ProfileApi = {
  URL,
  update,
  get,
}