import {Effect, guard, Store} from 'effector';
import {persist} from 'effector-storage/local';

import {CONSTANTS} from '../../configs/constants';
import {browserHistory, ROUTES} from '../../configs/navigation';
import {TAuthRequest, TAuthResponse} from './types';
import * as http from "../../configs/http";
import { ProfileEntity } from '../profile/entity';

export const AuthWatchers = {
  saveToken: (token: Store<string>) => {
    if (!token) return
    guard({
      source: token,
      filter: Boolean,
    }).watch(http.setToken);
  
    persist({
      store: token,
      key: CONSTANTS.TOKEN,
    });
  },
  actionsAfterLogin: (authFx: Effect<TAuthRequest, TAuthResponse, Error>) => {
    authFx.done.watch(() => {
      ProfileEntity.events.profileGet()
      browserHistory.push(ROUTES.private.profile);
    });
  },
  autoLogout: (isAuthorized: Store<boolean>) => {
    isAuthorized.watch(function autoLogout(state) {
      if (!state) {
        localStorage.removeItem(CONSTANTS.TOKEN);
        browserHistory.push(ROUTES.public.signIn);
      }
    });
  },
}