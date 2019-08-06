import React, { Component } from 'react';
import MenuIcon from 'Assests/Images/menu-button.png';

class Header extends Component{
    render(){
        const { label, customStyle } = this.props;
        return(
            <header>
                <div className="menu-trigger" style={customStyle}><img src={MenuIcon} alt="Menu" /></div>
                {label}
            </header>
        );
    }
}

export default Header;