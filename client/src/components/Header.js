import React, { Component } from 'react';
import '../css/header.css'


class Header extends Component {
  render() {
    return (
      
      <nav>
      <div class="nav-wrapper" >
        <a href="#" class="brand-logo">E-Bulky</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a>Login with Google</a>
          </li>
        </ul>
      </div>
    </nav>
    
    );
  }
}

export default Header;