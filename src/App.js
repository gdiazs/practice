import React, {Component} from 'react';
import {Navbar} from './shared/index';




class App extends Component {

	render(){
		return(
			<div>
				<Navbar />
		       <div className="Content">
		          {this.props.children}
		        </div>
			</div>

		);
	}
}    

export default App;