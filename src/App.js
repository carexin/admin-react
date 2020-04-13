import React from 'react';
import Home from "./page/home";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Task from "./page/task";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/task" component={Task}/>
					<Redirect from={"*"} to={"task"}/>
				</Switch>

			</Router>
		</div>
	);
}

export default App;
