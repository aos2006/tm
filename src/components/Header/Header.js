import React, { Component, PropTypes } from 'react';import HeaderActions from './HeaderActions'class Header extends Component {    static propTypes = {    handleClick: PropTypes.func  };    render() {    const items = {      firstList: [        {          icon: 'icon-dashboard-burger',          handleClick: this.props.handleClick        }      ],      secondList: [        {          icon: 'icon-settings'        },        {          icon: 'icon-log-out'        }      ]    };    return (      <header className="admin-layout__header">        <HeaderActions items={items.firstList}/>        <HeaderActions items={items.secondList}/>      </header>    )  }}export default Header