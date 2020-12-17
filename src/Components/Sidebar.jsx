import React from 'react';
import avatar from '../assets/images/avatar-2.png';
import { ListGroup } from 'react-bootstrap';

import { connect } from "react-redux";
import { getMenuItem, getMenuToggle } from '../redux/selectors';
import { toggleSidebar, toggleDropdown } from '../redux/actions';

const Sidebar = props => {
  function toggleMenu(e) {
    e.preventDefault();

    props.toggleSidebar()
  }

  const MenuItem = ({ idx, item, path }) => {
    return (
      <ListGroup.Item active={idx === 0} action href={path} disabled={!item.isAllowed} >
        <span className="label">{item.id}</span>
      </ListGroup.Item>
    )
  }

  const MenuChilds = ({ parent }) => {
    const showDropdown = () => {
      props.toggleDropdown(parent)
    }
  
    return (
      <ListGroup.Item className={`dropdown ${parent.isAllowed ? "show":""}`} onClick={showDropdown}>
        <span className="label parent">{parent.id}</span>
  
        <ListGroup>
          {parent.childs && parent.childs.length
            ? parent.childs.map((item, index) => {
              return <MenuItem key={`menu-${index}`} item={item} path="/" idx={index + 1} />
            })
            : ""
          }
        </ListGroup>
      </ListGroup.Item>
    )
  }

  return (
    <div id="sidebar" className={`${props.is_hidden ? "hide" : ""}`}>
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
              if(item.isShowed) {
                if (item.childs) {
                  return <MenuChilds key={item.id} parent={item} />
                } else {
                  return <MenuItem key={`menu-${index}`} item={item} path="/" idx={index} />
                }
              }
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
  toggleSidebar,
  toggleDropdown
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
