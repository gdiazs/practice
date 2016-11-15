import React, {Component} from 'react';
import './Login.css'

class Login extends Component{

	constructor(props) {
	    super(props);
	    this.state = { email: "", password: "" };
	 }

	render(){
			return (
			<div id="login-main" className="container">
				<div className="login-form">
					<div id="login-header">
						<h3 >Inicio de sesión</h3>
						{this.state.email} <br />
						{this.state.password}
					</div>
					<form className="form" onSubmit={this.loginSubmit.bind(this)}>
						<div className="form-group" >
							<label htmlFor="email">Correo</label>
							<input type="email"  onChange={this.onChangeEmail.bind(this)} className="form-control" id="email" placeholder="Correo" />
						</div>

						<div className="form-group" >
							<label htmlFor="password">Contraseña</label>
							<input type="password" name="password" className="form-control" id="password" onChange={this.onChangePassword.bind(this)} />
						</div>
						<div className="form-group" >
							<button className="btn btn-default">Entrar</button>
						</div>
					</form>
				</div>
			</div>
		);
	}

	loginSubmit(e){
	   e.preventDefault();
	   console.log(this.state);
	}

	onChangeEmail(e){
		this.setState(
			{
				email: e.target.value
			}
		);

	};


	onChangePassword(e){
		this.setState(
			{
				password: e.target.value
			}
		);
	}



}

export default Login;