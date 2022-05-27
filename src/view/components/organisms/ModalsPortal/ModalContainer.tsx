import * as React from 'react';
import styled from '@emotion/styled';
import { ModalFooter, TFooterButton } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

export enum EModalSize {
  LARGE, MEDIUM, SMALL
}

type TProps = {
  sizeMode: EModalSize;
  headerTitle: string;
  footerButtons: TFooterButton[];
  children?: React.ReactNode;
}

export const ModalContainer: React.FC<TProps> = ({ children, sizeMode, headerTitle, footerButtons }) => {
  const widthBySizeMode = {
    [EModalSize.SMALL]: '30vw',
    [EModalSize.MEDIUM]: '50vw',
    [EModalSize.LARGE]: '70vw',
  }

  return (
    <StyledModalContainer width={widthBySizeMode[sizeMode]} maxHeight={'85vh'}>
      <ModalHeader title={headerTitle} />
      <ModalContent>
        {children}
      </ModalContent>
      <ModalFooter footerButtons={footerButtons} />
    </StyledModalContainer>
  )
}

type TStyledModalContainerProps = {
  width: string;
  maxHeight: string;
}

const StyledModalContainer = styled.div<TStyledModalContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props: TStyledModalContainerProps) => props.width};
  max-height: ${(props: TStyledModalContainerProps) => props.maxHeight};
`

const ModalContent = styled.div`
  display: flex;
  margin-vertical: 24px;
  overflow-y: auto;
  flex-wrap: wrap;
`
