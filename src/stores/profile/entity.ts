import { forward } from "effector";
import { DeepPartial } from "react-hook-form";
import { TProfile } from "./types";
import { ProfileWatchers } from "./watchers";
import { AppDomain } from "../AppDomain";
import { ProfileApi } from "./api";

const ProfileDomain = AppDomain.createDomain();

const profileUpdate = ProfileDomain.createEvent<DeepPartial<TProfile>>();

const updateFx = ProfileDomain.createEffect(ProfileApi.update);

(function setWatchers() {
  forward({ from: profileUpdate, to: updateFx });
  ProfileWatchers.afterUpdate(updateFx);
})();

export const ProfileEntity = {
  selectors: {},
  events: {
    profileUpdate,
  }
};
