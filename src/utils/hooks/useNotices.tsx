import { useEffect } from "react";
import { NoticeEntity } from "../../stores/notice/entity"
import { useSnackbar } from "notistack";

export const useNotices = () => {
  const notices = NoticeEntity.selectors.useNotices()
  const { enqueueSnackbar } = useSnackbar();

  useEffect(function noticeHandle() {
    notices.forEach(enqueueSnackbar as any)
  }, [enqueueSnackbar, notices])
}