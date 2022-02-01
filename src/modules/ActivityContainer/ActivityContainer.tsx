import "./container.scss";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { CardContainer } from "../CardFlow/CardContainer";

export const ActivityContainer = function () {
  const { path } = useRouteMatch();

  return (
    <div className="activity-container">
      <Switch>
        <Route path={`${path}wishes`}>
          <>
            <CardContainer />
          </>
        </Route>
        <Route path={`${path}about`}>Actions</Route>
        <Route path={`${path}dashboard`}>Dashboard</Route>
        <Route path={`${path}blog`}>Blog</Route>
      </Switch>
    </div>
  );
};
