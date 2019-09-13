import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import logo from '../css/logo.png';
import '../css/header.css';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login</a>
          </li>
        );
      default:
        return [
          <li className='payments' key='1'>
            <Payments />
          </li>,
          <li className='credits' key='2'>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='3'>
            <a href='/api/logout'>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='brand-logo'
          >
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
