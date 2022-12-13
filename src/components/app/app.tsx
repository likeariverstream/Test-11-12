import React from 'react';
import { RegistrationPage } from '../../pages/registration-page';
import { Switch, Route } from 'react-router';
import { routes } from '../../utils/constants';
import { MainPage } from '../../pages/main-page';
import { AssociatePage } from '../../pages/associate-page';
import MediaQuery from 'react-responsive';
import { MobileRegistrationPage } from '../../pages/mobile-registration-page';
import { MobileMainPage } from '../../pages/mobile-main-page';
import { MobileAssociatePage } from '../../pages/mobile-associate-page';

export const App = () => {
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
      <Route path={routes.registration}>
        <MediaQuery minWidth={500}>
          <RegistrationPage />
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <MobileRegistrationPage />
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
