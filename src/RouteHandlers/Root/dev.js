import React, { Component, PropTypes } from 'react';
import DevTools from './DevTools';
import { Provider } from 'react-redux';
import MenuContainer from '../../containers/MenuContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import store from '../../store';

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="admin-layout__wrapper">
                    <MenuContainer />
                    <div className="admin-layout">
                      <HeaderContainer />
                      <div className="admin-layout__i">
                        {this.props.children}
                      </div>
                    </div>
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Root