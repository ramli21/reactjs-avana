import React from 'react';
import avatar from '../assets/images/avatar-2.png';
import { ListGroup } from 'react-bootstrap';

import { connect } from "react-redux";
import { getMenuItem, getMenuToggle } from '../redux/selectors';
import { toggleSidebar } from '../redux/actions';

const MenuItem = ({ idx, item, path }) => {
  return (
    <ListGroup.Item active={idx === 0} action href={path} disabled={!item.ative} >{item.id}</ListGroup.Item>
  )
}

const Sidebar = props => {
  function toggleMenu(e) {
    e.preventDefault();
    
    props.toggleSidebar()
  }

  return (
    <div id="sidebar" className={`${props.is_hidden ? "hide":""}`}>
      <div className="logo">
        <img src="https://www.avana.id/assets/images/logo.webp" alt="avana-logo" />
      </div>
      <div className="user-avatar text-center">
        <img src={avatar} alt="Avatar" width="86" />
        <h5 className="text-center text-white mt-3">Avriza Bramantyo</h5>
      </div>

      <div className="navigation">
        <ListGroup>
          {props.menus && props.menus.length
            ? props.menus.map((item, index) => {
              return <MenuItem key={`menu-${index}`} item={item} path="/" idx={index} />
            })
            : ""

          }
        </ListGroup>
      </div>

      {props.is_hidden
        ? <button className="toggle" onClick={toggleMenu}>&gt;</button>
        : <button className="toggle" onClick={toggleMenu}>&lt;</button>

      }
    </div>
  )
}

const mapStateToProps = state => {
  const menus = getMenuItem(state);
  const is_hidden = getMenuToggle(state);

  return { menus: menus, is_hidden: is_hidden }
}

const mapDispatchToProps = {
  toggleSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
