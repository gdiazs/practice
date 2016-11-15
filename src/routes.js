import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Login from './login/Login';

class Routes{
	static CONFIG =  
	(
		   <Router history={browserHistory}>
		      <Route path="/" component={App}>
		          <Route path="login" component={Login} />
		      </Route>
		     
		   </Router>
	);


}

export default Routes;