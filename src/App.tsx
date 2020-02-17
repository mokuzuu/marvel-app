import React from "react";
import BaseLayout from "components/abstracts/layout/BaseLayout";
import { Route, Switch, Redirect } from "react-router-dom";
import Heros from "pages/heros/Heros";
import { useTabletHook } from "hooks/isTablet";
import HeroDetail from "pages/heros/HeroDetail";
const routes = {
  characters: "/characters",
  charactereById: "/characters/:id"
};
export const rootPages = [routes.characters];
const App = () => {
  const isTablet = useTabletHook();
  console.log(`isTablet is app ${isTablet}`);
  return (
    <BaseLayout>
      <Switch>
        <Route path={routes.characters}>
          <Heros />
        </Route>
        {isTablet && (
          <Route path={routes.charactereById}>
            <HeroDetail />
          </Route>
        )}
        <Redirect from="*" to={routes.characters} />
      </Switch>
    </BaseLayout>
  );
};

export default App;
