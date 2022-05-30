import {AxiosResponse} from "axios";
import {DeepPartial} from "react-hook-form";
import {http} from "../../configs/http";
import { ProfileDTO } from "./dto";
import { TProfileResponse } from "./types";

const URL = '/profile';

const get = () => {
  return http.get<
    any,
    AxiosResponse<TProfileResponse, any>
  >(URL).then(response => response.data)
};

const update = (data: any) => {
  return http.put<
    DeepPartial<TProfileResponse>,
    AxiosResponse<TProfileResponse, DeepPartial<TProfileResponse>>
    >(`${URL}/${data.id}`, ProfileDTO(data)).then(response => response.data);
};

export const ProfileApi = {
  URL,
  update,
  get,
}