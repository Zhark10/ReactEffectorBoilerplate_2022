import styled from "@emotion/styled";
import React, { Key, useCallback } from "react";
import SuccessIcon from "@mui/icons-material/Done";
import InfoIcon from "@mui/icons-material/Info";
import ErrorIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";

import { ENoticeType, TNotice } from "../../../../stores/notice/types/TNotice";
import { EButtonType, UIButton } from "../UIButton/UIButton";
import { useSnackbar } from "notistack";

type TProps = {
  notice: TNotice;
  id: Key;
}

export const UINotice: React.FC<TProps> = React.forwardRef(({ notice, id }, ref) => {
  const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
        closeSnackbar(id);
    }, [closeSnackbar, id]);

  const noticeVariantInfo = React.useMemo(() => {
    const noticeVariants = {
      [ENoticeType.SUCCESS]: {
        title: "Успешно",
        getIcon: () => <SuccessIcon style={{ color: "#00a86b" }} />,
        backgroundColor: '#ffffff'
      },
      [ENoticeType.INFO]: {
        title: "Сообщение",
        getIcon: () => <InfoIcon style={{ color: "#007ba7" }} />,
        backgroundColor: '#ffffff'
      },
      [ENoticeType.ERROR]: {
        title: "Ошибка",
        getIcon: () => <ErrorIcon style={{ color: "#af3787" }} />,
        backgroundColor: '#ffffff'
      },
    }
    return noticeVariants[notice.variant]
  }, [notice.variant])
  return (
    <StyledNoticeContainer ref={ref as any} style={{ backgroundColor: noticeVariantInfo?.backgroundColor }}>
      <StyledLeftBox>{noticeVariantInfo?.getIcon()}</StyledLeftBox>
      <StyledCenterBox>
        <StyledTitle>{notice.title || noticeVariantInfo?.title}</StyledTitle>
        <StyledMessage>{notice.message}</StyledMessage>
        <StyledButtons>{
          notice.buttonActions?.map(action =>
            <UIButton onClick={action.cb} text={action.title} type={EButtonType.TEXT} />
          )}
        </StyledButtons>
      </StyledCenterBox>
      <StyledRightBox>
        <StyledCloseIcon onClick={handleDismiss}/>
      </StyledRightBox>
    </StyledNoticeContainer>
  )
})

const StyledNoticeContainer = styled.div`
  display: flex;
  box-shadow: 0px 6px 15px 0px #8C8C8C40;
`

const StyledLeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

const StyledCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px;
`

const StyledRightBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
`

const StyledTitle = styled.div`
  color: #2C3440;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Rubik';
`;

const StyledMessage = styled.div`
  color: #2C3440;
  font-size: 14px;
  font-family: 'Rubik';
  padding: 6px 0;
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: flex-start;
`

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`