import React from 'react';
import { RegisterPage } from '../../pages/register-page';
import { Switch, Route } from 'react-router';
import { routes } from '../../utils/constants';
import { MainPage } from '../../pages/main-page';
import { AssociatePage } from '../../pages/associate-page';
import MediaQuery from 'react-responsive';
import { MobileRegisterPage } from '../../pages/mobile-register-page';
import { MobileMainPage } from '../../pages/mobile-main-page';
import { MobileAssociatePage } from '../../pages/mobile-associate-page';
import { useDispatch } from '../../utils/hooks';
import { getUsersThunk } from '../../store/thunks/users';

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsersThunk());
  }, [])

  return (
    <Switch>
      <Route path={`/associate/:id`} exact>
        <MediaQuery minWidth={500}>
          <AssociatePage />
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <MobileAssociatePage />
        </MediaQuery>
      </Route>
      <Route path={routes.register}>
        <MediaQuery minWidth={500}>
          <RegisterPage />
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <MobileRegisterPage />
        </MediaQuery>
      </Route>
      <Route path={routes.main} exact>
        <MediaQuery minWidth={500}>
          <MainPage />
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <MobileMainPage />
        </MediaQuery>
      </Route>
    </Switch>
  );
}
