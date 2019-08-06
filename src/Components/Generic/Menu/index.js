import React, { Component } from 'react';
import { map } from 'lodash';
import { menuList } from 'Config';

class NavMenu extends Component {
    handleTrigger=(el)=>{
        this.props.handleMenu(el)
    }
    render(){
        const list = map(menuList, (el, i) =>{
            return <li key={i} onClick={this.handleTrigger.bind(this, el)}>{el}</li>
        })
        return <nav>
            <ul>
                {list}
            </ul>
        </nav>
    }
}
export default NavMenu;