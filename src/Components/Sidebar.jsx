import React from 'react';
import avatar from '../assets/images/avatar-2.png';
import { ListGroup } from 'react-bootstrap';

import { connect } from "react-redux";
import { getMenuItem, getMenuToggle } from '../redux/selectors';
import { toggleSidebar, toggleDropdown } from '../redux/actions';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };

    this.toggleSidebar = () => props.toggleSidebar();
  }

  toggleMenu = (e) => {
    e.preventDefault();

    this.toggleSidebar()
  }

  render() {
    const MenuChilds = ({ parent }) => {
      const showDropdown = () => {
        this.props.toggleDropdown(parent)

        this.forceUpdate()
      }

      return (
        <ListGroup.Item className={`dropdown ${parent.isAllowed ? "show" : ""}`}>
          <span className="label parent" onClick={showDropdown}>{parent.id}</span>

          <ListGroup>
            {parent.childs && parent.childs.length
              ? parent.childs.map((item, index) => {
                if (item.isShowed) {
                  if (item.childs) {
                    return <MenuChilds key={item.id} parent={item} />
                  } else {
                    return <MenuItem key={`menu-${index}`} item={item} path="/" idx={index + 1} is_child={true} />
                  }
                } else {
                  return null
                }
              })
              : ""
            }
          </ListGroup>
        </ListGroup.Item>
      )
    }

    const MenuItem = ({ idx, item, path, is_child }) => {
      return (
        <ListGroup.Item active={idx === 0} action href={path} disabled={!item.isAllowed} className={is_child ? "child" : ""}>
          <span className="label">{item.id}</span>
        </ListGroup.Item>
      )
    }

    return (
      <div id="sidebar" className={`${this.props.is_hidden ? "hide" : ""}`}>
        <div className="logo">
          <img src="https://www.avana.id/assets/images/logo.webp" alt="avana-logo" />
        </div>
        <div className="user-avatar text-center">
          <img src={avatar} alt="Avatar" width="86" />
          <h5 className="text-center text-white mt-3">Avriza Bramantyo</h5>
        </div>

        <div className="navigation">
          <ListGroup>
            {this.props.menus && this.props.menus.length
              ? this.props.menus.map((item, index) => {
                if (item.isShowed) {
                  if (item.childs) {
                    return <MenuChilds key={item.id} parent={item} />
                  } else {
                    return <MenuItem key={`menu-${index}`} item={item} path="/" idx={index} />
                  }
                } else {
                  return null
                }
              })
              : null
            }
          </ListGroup>
        </div>

        {this.props.is_hidden
          ? <button className="toggle" onClick={this.toggleMenu}>&gt;</button>
          : <button className="toggle" onClick={this.toggleMenu}>&lt;</button>
        }
      </div>
    )
  }
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
