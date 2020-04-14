import React from 'react';
import Home from "./page/home";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Task from "./page/task";
import Layout from "./component/layout";

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/task" component={Task}/>
						<Redirect from={"*"} to={"task"}/>
					</Switch>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
