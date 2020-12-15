import React from 'react';
import avatar from '../assets/images/avatar-2.png';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="logo">
        <img src="https://www.avana.id/assets/images/logo.webp" alt="avana-logo" />
      </div>
      <div className="user-avatar text-center">
        <img src={avatar} alt="Avatar" width="86" />
        <h5 className="text-center text-white mt-3">Avriza Bramantyo</h5>
      </div>

      <div className="navigation">
        <ListGroup defaultActiveKey="/">
          <ListGroup.Item action href="/">Cras justo odio</ListGroup.Item>
          <ListGroup.Item action href="#Dashboard1">Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item action href="#Dashboard2">Morbi leo risus</ListGroup.Item>
          <ListGroup.Item action href="#Dashboard3">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item action href="#Dashboard4" disabled>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item action href="#Dashboard4" disabled>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default Sidebar;
