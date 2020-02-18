import React from "react";
import BaseLayout from "components/abstracts/layout/BaseLayout";
import { Route, Switch, Redirect } from "react-router-dom";
import Heros from "pages/heros/Heros";
import { useTabletHook } from "hooks/isTablet";
import HeroDetail from "pages/heros/HeroDetail";
import store from "store/index";
import { Provider } from "react-redux";
import { routes } from "routes";
export const rootPages = [routes.characters];
const App = () => {
  const isTablet = useTabletHook();
  return (
    <Provider store={store}>
      <BaseLayout>
        {isTablet ? (
          <Switch>
            <Route path={routes.charactereById}>
              <HeroDetail />
            </Route>
            <Route path={routes.characters}>
              <Heros />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path={routes.characters}>
              <Heros />
            </Route>
            <Redirect from="*" to={routes.characters} />
          </Switch>
        )}
      </BaseLayout>
    </Provider>
  );
};

export default App;
