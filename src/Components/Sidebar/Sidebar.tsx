import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import './styles.scss';
import { ReactComponent as GiftLogo }from '../../assets/gift.svg'
import { ReactComponent as DeskLogo }from '../../assets/folder.svg'
import { ReactComponent as EventLogo }from '../../assets/calendar.svg'
import { ReactComponent as BlogLogo }from '../../assets/pen.svg'

const Side = () => {
   
  return (
    <>
      <Nav className="flex-column sidebar style-wrapper"
      variant="tabs"
      activeKey="/home"
      onSelect={selectedKey => console.log(`selected ${selectedKey}`)}
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
    </>
  );};

  const Sidebar = withRouter(Side);
  export default Sidebar;