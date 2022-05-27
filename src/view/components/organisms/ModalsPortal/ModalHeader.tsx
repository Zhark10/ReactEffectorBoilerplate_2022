import * as React from 'react';
import CloseIcon from "@mui/icons-material/Close";
import styled from '@emotion/styled';

import { ModalEntity } from '../../../../stores/modal/entity';

type TProps = {
  title: string;
}

export const ModalHeader: React.FC<TProps> = ({ title }) => {
  const hideCurrentModal = () => {
    ModalEntity.events.remove()
  }

  return (
    <StyledModalHeader>
      <StyledTitle id="keep-mounted-modal-title">
        {title}
      </StyledTitle>
      <StyledCloseIcon onClick={hideCurrentModal} />
    </StyledModalHeader>
  )
}

const StyledTitle = styled.span`
  font-weight: 500;
  font-family: "Rubik";
  font-size: 18px;
  color: #353535;
`

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`