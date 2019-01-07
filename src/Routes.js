import React from 'react';
import HomePage from './HomePage';
import CustomisePage from './CustomisePage';
import { HashRouter, Switch, Route } from "react-router-dom";

class Routes extends React.Component{
    render(){
        return(
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/customisePage' component={CustomisePage}/>
                    </Switch>
                </HashRouter>
        )
    }
}

export default Routes;