import { Routes, Route } from 'react-router-dom'

import ProfilePage from '../pages/private/ProfilePage';
import { StaticElements } from '../components/organisms/StaticElements';
import { ROUTES, STACKS } from '../../configs/navigation';
import { AuthEntity } from '../../stores/auth/entity';
import SignInPage from '../pages/public/SignInPage';

const { sport, photo } = ROUTES.private[STACKS.news.route]

export const useRoutes = () => {
  const isAuthentificated = AuthEntity.selectors.useIsAuthorized();

  if (isAuthentificated) {
    return (
      <StaticElements>
        <Routes>
          <Route index element={<ProfilePage />} />
          <Route path={STACKS.news.route} element={<></>} >
            <Route path={STACKS.news.route + sport.route} element={<>Новости спорта</>} />
            <Route path={STACKS.news.route + photo.route} element={<>Новые фото</>} />
          </Route>
        </Routes>
      </StaticElements>
    )
  }

  return (
    <Routes>
      <Route index element={<SignInPage />} />
      <Route path={ROUTES.public.signIn} element={<SignInPage />} />
    </Routes>
  )
}
