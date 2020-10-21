import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';
import Orphanage from '../pages/Orphanage';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/app" component={OrphanagesMap} />

    <Route path="/orphanages/create" component={CreateOrphanage} />
    <Route path="/orphanages/:id" component={Orphanage} />
  </Switch>
);

export default AppRoutes;

/* // render={props => <Landing {...props} toggleTheme={toggleTheme} />} */
