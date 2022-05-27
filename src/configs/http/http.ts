import axios from 'axios';
import {NoticeEntity} from '../../stores/notice/entity';
import {ENoticeType} from '../../stores/notice/types/TNotice';
import {CONSTANTS} from '../constants';
import * as types from './types';

export const BASE_URL = '/';

export const http = axios.create({
  baseURL: process.env.API_ROOT ?? BASE_URL,
});

type TServerError = {
  data: any;
  message?: string;
  code?: number;
};

const showStackErrors = (serverError: TServerError) => {
  const showError = (message: string) => {
    NoticeEntity.events.add({message, variant: ENoticeType.ERROR});
  }

  if (serverError.code === 404) {
    showError('Страница не найдена');
  }

  if (serverError?.data?.errors?.length) {
    const errorsStack = serverError.data.errors
      .map((error: { message: any; }) => error.message)
      .flat();

    const showFirstErrorFromStackByInterval = setInterval(() => {
      if (!errorsStack.length) {
        return () => clearInterval(showFirstErrorFromStackByInterval);
      }

      const currentNoticeToShow = errorsStack.shift();
      showError(currentNoticeToShow);
    }, 500);

    return () => clearInterval(showFirstErrorFromStackByInterval);
  }

  const defaultFallbackMessage = 'Произошла ошибка';
  showError(serverError.message || serverError.data?.message || defaultFallbackMessage);
};

http.interceptors.response.use(
  (response) => response,
  (error) => {
    showStackErrors(error)
    return Promise.reject(error);
  },
);

export const setToken = (token: string): void => {
  http.defaults.params = { [CONSTANTS.TOKEN]: token };
};

export const request = <T = void>(
  options: types.HttpRequestOptions,
): Promise<T> => {
  return http
    .request({
      url: options.url,
      method: options.method,
      data: options?.data,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data;
    });
};
