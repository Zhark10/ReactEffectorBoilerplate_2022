import React from 'react';
import { EButtonType, UIButton } from '../../../components/atoms/UIButton/UIButton';
import PageContainer from '../../../components/molecules/PageContainer/PageContainer';
import { useViewModel } from './view-model';

export default function ProfilePage() {
  const { methods: { logout }, data: { profile } } = useViewModel()

  if (!profile.user) return <React.Fragment/>

  return (
    <PageContainer>
      {profile.user.firstName}
      <UIButton onClick={logout} text="Выйти" type={EButtonType.CONTAINED} />
    </PageContainer>
  );
}
