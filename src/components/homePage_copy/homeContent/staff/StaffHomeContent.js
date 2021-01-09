import React from 'react';
import { Switch } from "react-router-dom";
import { Layout } from "antd";

import * as ROUTES from "../../../../constants/routes";
import PrivateRoute from "../../../routes/PrivateRoute";
import Dashboard from "../../dashboard/Dashboard";
import FullCalendarDashboard from "../../fullCalendar/FullCalendarDashboard";

const { Content } = Layout;

const StaffHomeContent = ({ keys, selectedKey, setSelectedKey, match }) => {

  return (
    <Content style={{ margin: "0 16px" }}>
      <div className="site-layout-background">
        <Switch>
          <PrivateRoute
            path={`${match.path}${ROUTES.STAFFDASHBOARD}`}
            component={Dashboard}
            // menuKey={{ dashboardKey: keys[0], assignmentsKey: keys[2], calendarKey: keys[3] }}
            menuKey={{ dashboardKey: keys[0], calendarKey: keys[3] }}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
          <PrivateRoute
            path={`${match.path}${ROUTES.CALENDAR}`}
            menuKey={keys[3]}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            component={FullCalendarDashboard}
          />
        </Switch>
      </div>
    </Content>
  )
}

export default StaffHomeContent;