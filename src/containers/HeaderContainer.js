import React, { Component, PropTypes } from 'react';import toggleVisibilityMenu from '../HOC/toggleVisibilityMenu'import {showMenu} from '../AC/menu'import {connect} from 'react-redux';import Header from '../components/Header/Header'class HeaderContainer extends Component {  static propTypes = {    isShow: PropTypes.bool,    toggleVisibilityMenu: PropTypes.func  };  render() {    return (     <Header handleClick={this.props.toggleVisibilityMenu}/>    )  }}export default connect((state) => ({  isShow: state.menu.isShow}),{showMenu})(toggleVisibilityMenu(HeaderContainer))