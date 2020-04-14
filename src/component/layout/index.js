import React from "react";
import {Button} from "antd";

class Layout extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
{/*				<TopNav/>
				<SideNav/>*/}
				<Button>layout</Button>
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
