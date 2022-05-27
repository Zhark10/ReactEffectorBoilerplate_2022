import {AxiosResponse} from "axios";
import {DeepPartial} from "react-hook-form";
import {http} from "../../configs/http";
import { ProfileDTO } from "./dto";
import { TProfile } from "./types";

const URL = '/profile';

const update = (data: any) => {
  return http.put<
    DeepPartial<TProfile>,
    AxiosResponse<TProfile, DeepPartial<TProfile>>
    >(`${URL}/${data.id}`, ProfileDTO(data)).then(response => response.data);
};

export const ProfileApi = {
  URL,
  update,
}