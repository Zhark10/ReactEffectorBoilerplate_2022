import React from 'react';
import {FormControl, InputBase, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {styled} from "@mui/material/styles";

const BootstrapInput = styled(InputBase)(() => ({
  'label + &': {
    fontFamily: "Rubik",
  },
  '& .MuiInputBase-input': {
    display: "flex",
    alignItems: "center",
    padding: "20px 0 0 12px",
    borderRadius: 4,
    boxSizing: "border-box",
    position: "relative",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E6E7E8",
    fontSize: 16,
    fontWeight: "normal",
    color: "#353535",
    fontFamily: "Rubik",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.09)",
    },
    "&:active": {
      borderRadius: 4,
      borderColor: '#00a86b',
      backgroundColor: "#FFFFFF",
    },
    "&:focus": {
      borderRadius: 4,
      borderColor: '#00a86b',
      backgroundColor: "#FFFFFF",
    },
  },
}));

export type UISelectProps = {
  value?: string | string[];
  ref?: any;
  label?: string;
  size?: number;
  options?: any[];
  onChange?: (value: string | string[]) => void;
  getOptionalLabel?: (item: any) => any;
  getOptionalValue?: (item: any) => any;
  multiple?: boolean;
  fullWidth?: boolean;
}

const UISelect: React.FC<UISelectProps> = ({getOptionalLabel, getOptionalValue, label, size = 48, value, ref, options, onChange, multiple, fullWidth, ...otherProps}) => {
  const width = fullWidth ? '100%' : 'calc(50% - 12px)';

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;
    onChange && onChange(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const viewCurrentValue = (value: string[]): string => {
    for (let item of options!) {
      if (((getOptionalValue && getOptionalValue(item)) || item.id || item.uid) === value) {
        return ((getOptionalLabel && getOptionalLabel(item)) || item.name);
      }
    }
    return label!;
  };

  return (
    <FormControl variant="filled" sx={{height: size, width }} {...otherProps}>
      <InputLabel
        id={`selector-${label}`}
        sx={{
          fontFamily: "Rubik",
          fontSize: 14,
          color: "#80858C",
          '& .Mui-focused': {
            color: "#00a86b",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        ref={ref}
        labelId={`selector-${label}`}
        value={value || (multiple ? [] : undefined)}
        onChange={handleChange}
        multiple={multiple}
        renderValue={(value) => {
          return (
            value?.length
              ? multiple
                ? `Выбрано: ${value.length}`
                : viewCurrentValue(value as string[])
              : label
          )
        }}
        input={<BootstrapInput />}
        inputProps={{
          sx: {
            height: `48px !important`,
          }
        }}
      >
        {options?.map((item, key) => {
          return (
            <MenuItem key={key} style={{
              fontSize: 16,
              color: "#353535",
            }} value={String((!!getOptionalValue && getOptionalValue(item)) || item.id || item.uid)}>
              {(getOptionalLabel && getOptionalLabel(item)) || item.name}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}

export default UISelect;