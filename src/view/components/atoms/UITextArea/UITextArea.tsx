import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField, {
  shouldForwardProp: (props: any) => props !== "focusColor"
})((p: { focusColor: string }) => ({
  width: '100%',
  "& label": {
    color: "#80858C",
    left: 12,
    top: 0,
    "&.Mui-focused": {
      color: p.focusColor,
      left: 12,
    },
  },
  "& .MuiInput-root": {
    border: "1px solid #E6E7E8",
    borderRadius: 4,
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: "normal",
    color: "#353535",
    padding: 8,
    "&.Mui-focused": {
      borderColor: `${p.focusColor} !important`,
      color: p.focusColor
    }
  }
}));

type UIInputProps = {
  label?: string;
} & TextFieldProps;

const UITextArea: React.FC<UIInputProps> = ({ label, rows, maxRows, value, size = 68 }) => {
  return (
    <CssTextField
      label={label}
      multiline
      rows={rows}
      variant="standard"
      focusColor="#00a86b"
      InputProps={{
        style: {
          width: '100%',
          minHeight: size,
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
    />
  )
};

export default UITextArea;