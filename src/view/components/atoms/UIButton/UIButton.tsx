import {FC} from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonProps } from "@mui/material";

type TUiButton = {
  text: string;
  color?: EButtonColor;
  type?: EButtonType;
  onClick: any;
  disabled?: boolean;
}

export enum EButtonType {
  CONTAINED = "contained",
  OUTLINED = "outlined",
  TEXT = "text",
}

export enum EButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const UIButton: FC<TUiButton> = ({ text, onClick, color = EButtonColor.PRIMARY, type = EButtonType.CONTAINED }) => {
  return (
    <StyledButton onClick={onClick} variant={type} color={color}>{text}</StyledButton>
  )
}

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  // YOUR CUSTOM STYLES (DEFAULT, ACTIVE, HOVER, etc.)
}));