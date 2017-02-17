import React, { Component } from 'react';
import './Login/css/normalize.css';
import './Login/css/animate.css';
import './Login/fa/css/font-awesome.min.css';
import './Login/css/style.css';
import './Login/js/index.js';

class Login extends Component {
  render() {
    return (
      <div className="Login">
	<div className="inner-wrapper">
		<nav className="sidebar-wrapper">
			<a href="#" id="main-nav-toggle">
				<span>Menu</span>
			</a>
			<ul className="nav">
				<li className="nav-item"><a href="#">Student Login</a></li>
				<li className="nav-item"><a href="#">TPR Login</a></li>
				<li className="nav-item"><a href="#">Admin Login</a></li>
			</ul>
		</nav>

		<div className="content-wrapper">
			<header className="main-header">
				<h1>N.I.T Durgapur <strong> T.P.S.W </strong> </h1>
			</header>
			<section className="login-form-wrapper">
				<form action="" className="login-form">
					<fieldset>
						<label htmlFor="user-name"><i className="fa fa-user"></i> Your User Name</label>
						<input type="text" id="user-name" />
					</fieldset>
					<fieldset>
						<label htmlFor="password"><i className="fa fa-lock"></i> Your Password</label>
						<input type="password" id="password" />
					</fieldset>
					<fieldset>
						<a href="#" className="login-forgot-password">Forgot Password?</a>
					</fieldset>
					<fieldset>
						<input type="submit" className="submit" value="Login"/>
					</fieldset>
				</form>
			</section>
			<section className="login-footer">
				<div className="footer-item"><a >Register <i className="fa fa-lg fa-arrow-right"></i></a></div>
				<div className="footer-item"><a href="#">Student Register <i className="fa fa-lg fa-user-plus"></i></a></div>
				<div className="footer-item"><a href="#">T.P.R Register <i className="fa fa-lg fa-user-plus"></i></a></div>
			</section>
		</div>
	</div>
      </div>
    );
  }
}

export default Login;
