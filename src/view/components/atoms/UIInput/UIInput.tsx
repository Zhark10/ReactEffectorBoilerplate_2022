import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField, {
  shouldForwardProp: (props: any) => props !== "focusColor"
})((p: { focusColor: string, width: string, error: boolean }) => ({
  width: p.width,
  "& label": {
    color: "#80858C"
  },
  "& label.Mui-focused": {
    color: `${p.error ? "#d32f2f" : p.focusColor} !important`,
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E6E7E8",
    borderRadius: 4,
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: "normal",
    color: "#353535",
    "&.Mui-focused": {
      borderColor: `${p.error ? "#d32f2f" : p.focusColor} !important`,
      backgroundColor: "#FFFFFF",
      color: `${p.error ? "#d32f2f" : p.focusColor} !important`,
    },
    "&.Mui-error": {
      border: "1px solid #d32f2f",
    },
  }
}));

type UIInputProps = {
  inputRef?: any;
  endAdornment?: any;
  iconSrc?: string;
  label?: string;
  size?: number;
  fullWidth?: boolean;
  error?: any;
  onChange?: (value: any) => void;
  onChangeWithEvent?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  value?: string;
};

const UIInput: React.FC<UIInputProps> = ({ endAdornment, inputRef, value, onChangeWithEvent, onChange, onFocus, onBlur, iconSrc, label, fullWidth, size = 48, error, ...otherProps }) => {
  const width = fullWidth ? '100%' : 'calc(50% - 12px)'


  const handleChangeInput = (event: any) => {
    onChange && onChange(event.target.value);
    onChangeWithEvent && onChangeWithEvent(event);
  }

  const handleOnFocus = (event: any) => {
    onFocus && onFocus(event);
  }

  const handleOnBlur = (event: any) => {
    onBlur && onBlur(event);
  }

  return (
    <CssTextField
      ref={inputRef}
      label={label}
      width={width}
      value={value || ''}
      placeholder="Введите значение"
      defaultValue=""
      variant="filled"
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      onChange={handleChangeInput}
      focusColor="#00a86b"
      error={!!error}
      helperText={error ? error.message : null}
      InputProps={{
        endAdornment: endAdornment || (iconSrc &&
          <InputAdornment position="end">
            <img src={iconSrc} alt="icon" />
          </InputAdornment>),
        style: {
          width: '100%',
          height: size,
        },
        disableUnderline: true,
      }}
      InputLabelProps={{
        style: {
          fontFamily: "Rubik",
          fontSize: 14,
          fontWeight: "normal",
        },
      }}
      {...otherProps}
    />
  )
};

export default UIInput;