import { Effect } from "effector";
import { NoticeEntity } from "../notice/entity";
import { ENoticeType } from "../notice/types/TNotice";
import { TUser } from "./types";

export const ProfileWatchers = {
  afterUpdate: function(updateProfileFx: Effect<any, TUser, Error>) {
    updateProfileFx.doneData.watch(() => {
      NoticeEntity.events.add({ message: "Профиль успешно сохранен", variant: ENoticeType.SUCCESS })
    });
  }
}