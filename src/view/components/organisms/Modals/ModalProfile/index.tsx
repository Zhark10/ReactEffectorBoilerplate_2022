import React from "react"
import { FormProvider } from "react-hook-form";
import styled from "@emotion/styled";

import { useViewModel } from "./view-model";
import { TCustomModalProps } from "../../../../../stores/modal/types";
import { EModalSize, ModalContainer } from "../../ModalsPortal/ModalContainer";
import { EFormFieldType, FormField } from "../../../molecules/FormField/FormField";
import { EValidationErrors } from "../../../../../configs/types/TErrors";

export const ModalProfile: React.FC<TCustomModalProps> = (props) => {
  const {
    data: { footerButtons },
    methods: { formMethods }
  } = useViewModel(props);

  return (
    <FormProvider {...formMethods} >
      <ModalContainer
        footerButtons={footerButtons}
        headerTitle={"Редактирование профиля"}
        sizeMode={EModalSize.MEDIUM}
      >
        <ContentWrapper>
          <FormField label="Имя *" name="firstName" type={EFormFieldType.INPUT}
            rules={{ required: EValidationErrors.REQUIRED }} fullWidth />
          <FormField label="Фамилия *" name="secondName" type={EFormFieldType.INPUT}
            rules={{ required: EValidationErrors.REQUIRED }} fullWidth />
          <FormField label="Возраст" name="age" type={EFormFieldType.INPUT}
            rules={{ required: EValidationErrors.REQUIRED }} fullWidth />
        </ContentWrapper>
      </ModalContainer>
    </FormProvider>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`
