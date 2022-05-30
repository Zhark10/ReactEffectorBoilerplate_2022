import { forward } from "effector";
import { TProfileRequest, TProfileResponse } from "./types";
import { ProfileWatchers } from "./watchers";
import { AppDomain } from "../AppDomain";
import { ProfileApi } from "./api";
import { useStore } from "effector-react";
import { AuthEntity } from "../auth/entity";

const ProfileDomain = AppDomain.createDomain();

const profileGet = ProfileDomain.createEvent();
const profileUpdate = ProfileDomain.createEvent<TProfileRequest>();

const getFx = ProfileDomain.createEffect(ProfileApi.get);
const updateFx = ProfileDomain.createEffect(ProfileApi.update);

const $profile = ProfileDomain.createStore<TProfileResponse>({
  user: null
})
  .on(getFx.doneData, (_, data) => data)
  .reset(AuthEntity.events.logoutClicked);

(function setWatchers() {
  forward({ from: [profileGet, profileUpdate], to: [getFx, updateFx] });
  ProfileWatchers.afterUpdate(updateFx);
})();

export const ProfileEntity = {
  selectors: {
    useProfile: () => useStore($profile),
  },
  events: {
    profileUpdate,
    profileGet,
  }
};
