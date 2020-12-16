import React from 'react';
import { connect } from "react-redux";

import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';

import { getMenuToggle } from './redux/selectors';

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="main-site">
				<Sidebar />

				<div id="main-page" className={`${this.props.is_hidden ? "menu-hidden" : ""}`}>
					<Home />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const is_hidden = getMenuToggle(state);

	return { is_hidden }
}

export default connect(mapStateToProps)(App);
