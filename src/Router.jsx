import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './pages/404'
import Home from './pages/Home'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='*' component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter
