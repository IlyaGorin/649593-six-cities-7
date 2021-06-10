import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../main-page/main-page';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Settings , AppRoute} from '../../const';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            placesCount={Settings.PlACES_COUNT}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <Login />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Room />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
