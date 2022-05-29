import { forward } from 'effector'
import { useStore } from 'effector-react';
import { TAuthRequest, TAuthResponse } from './types';
import { AuthApi } from './api';
import { AuthWatchers } from './watchers';
import { AppDomain } from '../AppDomain';

const AuthDomain = AppDomain.createDomain();

const formSubmitted = AuthDomain.createEvent<TAuthRequest>();
const logoutClicked = AuthDomain.createEvent();
const authFx = AuthDomain.createEffect(AuthApi.signIn);

const $auth = AuthDomain.createStore<TAuthResponse>({
  token: { id: "" }
})
  .reset(logoutClicked)
  .on(authFx.doneData, (_, data) => data)

const $token = $auth.map((auth) => auth.token.id);
const $isAuthorized = $token.map(Boolean).reset(logoutClicked);

(function setWatchers() {
  forward({ from: formSubmitted, to: authFx });
  AuthWatchers.saveToken($token)
  AuthWatchers.actionsAfterLogin(authFx)
  AuthWatchers.autoLogout($isAuthorized)
})();

export const AuthEntity = {
  selectors: {
    useIsAuthorized: () => useStore($isAuthorized),
    useAuth: () => useStore($auth),
  },
  events: {
    formSubmitted,
    logoutClicked,
  }
};
