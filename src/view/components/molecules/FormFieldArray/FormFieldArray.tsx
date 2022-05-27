import styled from '@emotion/styled';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import CloseIcon from "@mui/icons-material/Close";
import { EButtonType, UIButton } from '../../atoms/UIButton/UIButton';
import { FormField, TFormFieldProps } from '../FormField/FormField';
import { getEmptyValueByType } from '../../../../utils/helpers/getEmptyValueByType';

type TProps = {
  title?: string;
  titleFromItemField?: string;
  name: any;
  arrayFields: TFormFieldProps[];
}

const SPACE_FOR_ICON = 24;

export const FormFieldArray: React.FC<TProps> = ({
  title, titleFromItemField, name, arrayFields
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  const addItem = React.useCallback(() => {
    const emptyItem: { [key: string]: any } = {}
    arrayFields.forEach(field => emptyItem[field.name] = getEmptyValueByType(field.type))
    append(emptyItem)
  }, [append, arrayFields])

  React.useEffect(function createFirstItemWhenIsEmpty() {
    if (!fields.length) addItem()
  }, [addItem, fields.length])


  return (
    <FieldArrayContainer>
      {fields.map((item: any, index: number) => {
        const arrayName = `${name}[${index}]`;
        const removeItem = () => {
          remove(index)
        }

        const definedTitle =
          (titleFromItemField && item[titleFromItemField as any]) ||
          (title && `${title} ${index + 1}`)

        const closeIcon = index !== 0 ? <StyledCloseIcon onClick={removeItem} style={{ marginTop: 12 }} /> : <div style={{ width: SPACE_FOR_ICON }} />
        return (
          <StyledArrayItemContainer key={item.id}>
            <StyledFields>
              {
                Boolean(definedTitle) && <StyledHeader>
                  <StyledTitle>{definedTitle}</StyledTitle>
                  {index !== 0 && <StyledCloseIcon onClick={removeItem} />}
                </StyledHeader>
              }
              {arrayFields.map(field => <FormField {...field} name={`${arrayName}.${field.name}`} />)}
            </StyledFields>
            {!definedTitle &&
              <StyledCloseButtonBox>
                {closeIcon}
              </StyledCloseButtonBox>
            }
          </StyledArrayItemContainer>
        )
      })}
      <ButtonContainer>
        <UIButton onClick={addItem} text="+" type={EButtonType.OUTLINED} />
      </ButtonContainer>
    </FieldArrayContainer>
  );
}

export const ButtonContainer = styled.div`
  margin-left: 8px;
`

const FieldArrayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledArrayItemContainer = styled.div`
  display: flex;
  width: 100%;
`

const StyledFields = styled.div`
  display: flex;
  padding: 16px;
  margin-bottom: 16px;
  flex: 1;
  background-color: #F4F7F8;
  border-radius: 4px 0 0 4px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StyledCloseButtonBox = styled.div`
  display: flex;
  padding: 16px 16px 16px 0;
  margin-bottom: 16px;
  width: ${SPACE_FOR_ICON};
  background-color: #F4F7F8;
  border-radius: 0 4px 4px 0;
  align-items: flex-start;
  justify-content: space-between;
`

const StyledHeader = styled.span`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  justify-content: space-between;
`

const StyledTitle = styled.span`
  font-weight: 500;
  font-family: "Rubik";
  font-size: 18px;
  color: #353535;
`

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  width: ${SPACE_FOR_ICON}px;
  color: #00a86b;
`