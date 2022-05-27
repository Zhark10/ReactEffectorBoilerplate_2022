import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div`
  margin-left: 88px;
  padding-right: 26px;
`;

interface IProps {
  children?: React.ReactNode;
}

const PageContainer: React.FC<IProps> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default PageContainer;