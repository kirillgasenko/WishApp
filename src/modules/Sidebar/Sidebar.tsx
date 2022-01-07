import {
  withRouter,
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { SidebarHeader } from "../SidebarHeader/SidebarHeader";

import "./sidebar.scss";
import { ReactComponent as GiftLogo } from "../../assets/gift.svg";
import { ReactComponent as DeskLogo } from "../../assets/folder.svg";
import { ReactComponent as EventLogo } from "../../assets/calendar.svg";
import { ReactComponent as BlogLogo } from "../../assets/pen.svg";
import { ReactComponent as BowLogo } from "../../assets/bow.svg";
// import { ReactComponent as InviteText } from "../../assets/invite.svg";

const Side = () => {
  // let history = useHistory();

  return (
    <div className="sidebar style-wrapper">
      <SidebarHeader />
      <ul>
        <li>
          <Link to="/wishes">
            <GiftLogo className="logo" />
            Желания
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <EventLogo className="logo" />
            Доски
          </Link>
        </li>
        <li>
          <Link to="/about">
            <DeskLogo className="logo" />
            События
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <BlogLogo className="logo" />
            Блог
          </Link>
        </li>
      </ul>
      <div className="invite-block">
        <BowLogo className="bow-logo" />
        {/* <InviteText /> */}
      </div>
    </div>
  );
};

const Sidebar = Side;
export default Sidebar;
