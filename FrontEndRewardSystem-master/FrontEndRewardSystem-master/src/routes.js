import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
import AddGoal from "./components/AddGoal";
import FillaSurvey from "./components/FillSurvey";
import LoginCheck from "./components/LoginCheck";
import ShareRewards from "./components/ShareRewards";
import Login from "./components/Login";
import RewardsLevelOne from "./components/RewardsLevelOne";
import RewardsLevelTwo from "./components/RewardsLevelTwo";
import RewardsHistory from "./components/RewardsHistory";
import Donate from "./containers/Donate";
import Adverts from "./components/Adverts";

const BaseRouter = () => (
  <div>
    <Route exact path="/dashboard/" component={Dashboard} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/addGoal/" component={AddGoal} />
    <Route exact path="/adverts/" component={Adverts} />
    <Route exact path="/fillasurvey/" component={FillaSurvey} />
    <Route exact path="/dailyLogin/" component={LoginCheck} />
    <Route exact path="/shareRewards/" component={ShareRewards} />
    <Route exact path="/rewardshistory/" component={RewardsHistory} />
    <Route exact path="/donate/" component={Donate} />
  </div>
);

export default BaseRouter;
