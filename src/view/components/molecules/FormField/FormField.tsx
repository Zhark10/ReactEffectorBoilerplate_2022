import React from 'react';
import { Controller, FieldPathValue, InternalFieldName, Message, useFormContext, Validate, ValidationRule } from 'react-hook-form';
import UIInput from '../../atoms/UIInput/UIInput';
import UISelect, { UISelectProps } from '../../atoms/UISelect/UISelect';
import UITextArea from '../../atoms/UITextArea/UITextArea';

export enum EFormFieldType {
  INPUT, TEXTAREA, SELECT
}

export type TFormFieldProps = {
  type: EFormFieldType;
  name: any;
  label: string;
  fullWidth?: boolean;
  rules?: TValidationRules;
  withoutBottomOffset?: boolean;
  selectProps?: UISelectProps;
}

export const FormField: React.FC<TFormFieldProps> = ({
  fullWidth, name, type, label, rules, withoutBottomOffset, selectProps, ...otherProps
}) => {
  const { control } = useFormContext();

  const defaultFormFieldstyles = React.useMemo(() => ({
    marginBottom: withoutBottomOffset ? 0 : 24,
  }), [withoutBottomOffset])

  const getField = React.useCallback(({ field, fieldState }: any) => {
    const defaultProps = { ...field, ref: field.ref, error: fieldState.error, label, ...otherProps }
    const fields = {
      [EFormFieldType.INPUT]: <UIInput {...defaultProps} fullWidth={fullWidth} style={defaultFormFieldstyles} />,
      [EFormFieldType.TEXTAREA]: <UITextArea {...defaultProps} rows={3} maxRows={Infinity} />,
      [EFormFieldType.SELECT]: <UISelect {...defaultProps}
        options={selectProps?.options}
        getOptionalLabel={selectProps?.getOptionalLabel}
        getOptionalValue={selectProps?.getOptionalValue}
        fullWidth={fullWidth}
        style={defaultFormFieldstyles}
      />,
      // ... YOUR OTHER FIELD TYPES ...
    }
    return fields[type];
  }, [defaultFormFieldstyles, fullWidth, label, selectProps, otherProps, type])

  const fieldController = <Controller
    name={name}
    control={control}
    render={getField}
    rules={rules}
  />

  return fieldController
}

export type TValidationRules = Partial<{
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  pattern: ValidationRule<RegExp>;
  validate: Validate<FieldPathValue<any, any>> | Record<string, Validate<FieldPathValue<any, any>>>;
  valueAsNumber: boolean;
  valueAsDate: boolean;
  value: FieldPathValue<any, any>;
  setValueAs: (value: any) => any;
  shouldUnregister?: boolean;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  disabled: boolean;
  deps: InternalFieldName | InternalFieldName[];
}>;
