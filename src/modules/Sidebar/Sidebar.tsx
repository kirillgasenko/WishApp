import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter, useHistory } from 'react-router-dom';

import { SidebarHeader } from '../SidebarHeader/SidebarHeader';

import './sidebar.scss';
import { ReactComponent as GiftLogo }from '../../assets/gift.svg';
import { ReactComponent as DeskLogo }from '../../assets/folder.svg';
import { ReactComponent as EventLogo }from '../../assets/calendar.svg';
import { ReactComponent as BlogLogo }from '../../assets/pen.svg';
import { ReactComponent as BowLogo }from '../../assets/bow.svg';
import { ReactComponent as InviteText }from '../../assets/invite.svg';

const Side = () => {
  let history = useHistory();
   
  return (
    <div className="sidebar style-wrapper">
      <SidebarHeader/>
      <Nav className="flex-column"
      activeKey="/home"
      onSelect={ selectedKey => {
        console.log(`selected ${selectedKey}`);
        history.push(`${selectedKey}`);
        }}
      >
        <Nav.Item>
          <Nav.Link href="/home">
            <GiftLogo className="logo"/>Желания
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/wishes">
            <DeskLogo className="logo"/>Доски
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/events">
            <EventLogo className="logo"/>События
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">
            <BlogLogo className="logo"/>Блог
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="invite-block">
        <BowLogo className="bow-logo"/>
        <InviteText/>
      </div>
    </div>
  );};

  const Sidebar = withRouter(Side);
  export default Sidebar;