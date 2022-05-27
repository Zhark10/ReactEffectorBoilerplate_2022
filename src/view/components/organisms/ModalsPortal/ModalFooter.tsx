import * as React from 'react';
import styled from '@emotion/styled';

import {EButtonColor, EButtonType, UIButton} from '../../atoms/UIButton/UIButton';

type TProps = {
  footerButtons: TFooterButton[];
}

export type TFooterButton = {
  cb: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  text: string;
  color?: EButtonColor;
  type?: EButtonType;
}

export const ModalFooter: React.FC<TProps> = ({ footerButtons }) => (
  <StyledModalFooter>
    {footerButtons.map(button => (
      <ButtonContainer key={button.text}>
        <UIButton onClick={button.cb} text={button.text} color={button.color} type={button.type} />
      </ButtonContainer>
    ))}
  </StyledModalFooter>
)

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`

export const ButtonContainer = styled.div`
  margin-left: 8px;
`