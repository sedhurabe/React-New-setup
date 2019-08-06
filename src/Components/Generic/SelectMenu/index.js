import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map, isEmpty } from 'lodash';

class SelectMenu extends Component {
  handleSelect = (el) =>{
    this.props.handleSelectValue(el);
  }
  render(){
    const { menuList, selectedValue, handleSelectClick, isSelectActive, placeholder } = this.props;
    const list = map(menuList, (el, i) => {
      return <li key={i} onClick={this.handleSelect.bind(this, el)}>{el}</li>
    })
    return(
      <div className="select-menu">
        <div className="select-menu-trigger" onClick={handleSelectClick}>
          {!isEmpty(selectedValue)?selectedValue:placeholder}
        </div>
        <div className={["select-menu-list", isSelectActive && "select-menu-list-active"].join(' ')}>
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}

SelectMenu.proptypes = {
  menuList: PropTypes.array,
  selectedValue: PropTypes.object,
  handleSelectClick: PropTypes.func,
  isSelectActive: PropTypes.bool,
  placeholder: PropTypes.string
}

export default SelectMenu;