import { Effect } from "effector";
import { NoticeEntity } from "../notice/entity";
import { ENoticeType } from "../notice/types/TNotice";
import { TProfile } from "./types";

export const ProfileWatchers = {
  afterUpdate: function(updateProfileFx: Effect<any, TProfile, Error>) {
    updateProfileFx.doneData.watch(() => {
      NoticeEntity.events.add({ message: "Профиль успешно сохранен", variant: ENoticeType.SUCCESS })
    });
  }
}