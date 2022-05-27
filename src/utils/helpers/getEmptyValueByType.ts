import { EFormFieldType } from "../../view/components/molecules/FormField/FormField"

export const getEmptyValueByType = (type: EFormFieldType) => {
  const types = {
    [EFormFieldType.INPUT]: '',
    [EFormFieldType.TEXTAREA]: '',
    [EFormFieldType.SELECT]: '',
  }
  return types[type]
}