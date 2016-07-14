import React from 'react';
import { Route, Router, IndexRoute, IndexRedirect, browserHistory, hashHistory } from 'react-router';
import {getData} from './AC/tableList'
import Root from './RouteHandlers/Root';
import ClientsIndex from './RouteHandlers/Clients/index';
import DimensionIndex from './RouteHandlers/Dimensions/index';
import NotifyIndex from './RouteHandlers/Notify/index';
import WorkCategoryIndex from './RouteHandlers/WorkCategory/index';
import WorkTypeIndex from './RouteHandlers/WorkTypes/index';
import EstimatesIndex from './RouteHandlers/Estimates/index'
import NotFound from './RouteHandlers/NotFound'
import store from './store'

export default (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Root}>
           <Route path="/clients" component = {ClientsIndex} onEnter={()=>{
            store.dispatch(getData('/src/api/clients.json'));
           }}>
             <IndexRedirect to="1"/>
             <Route path=":page" component={ClientsIndex}></Route>
           </Route>
           <Route path="/dimensions" component={DimensionIndex} onEnter={()=>{
            store.dispatch(getData('/src/api/dimensions.json'));
           }}>
             <IndexRedirect to="1"/>
             <Route path=":page" component={DimensionIndex}>

             </Route>
           </Route>
           <Route path="/notify" component={NotifyIndex}></Route>

           <Route path="/workcategory" component={WorkCategoryIndex} onEnter={()=>{
            store.dispatch(getData('/src/api/workcategories.json'));
           }}>
             <IndexRedirect to="1"/>
             <Route path=":page" component={WorkCategoryIndex}>

             </Route>
           </Route>

           <Route path="/worktypes" component={WorkTypeIndex} onEnter={()=>{
            store.dispatch(getData('/src/api/worktypes.json'));
           }}>
             <IndexRedirect to="1"/>
             <Route path=":page" component={WorkTypeIndex}></Route>
           </Route>
           <Route path="/estimates" component={EstimatesIndex} onEnter={()=>{
            store.dispatch(getData('/src/api/estimates.json'));
           }}>
             <IndexRedirect to="1"/>
             <Route path=":page" component={EstimatesIndex}>

             </Route>
           </Route>
        </Route>
        <Route path = "*" component = {NotFound}/>
    </Router>
)