import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc'

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    RestoService.getMenuItems()
        .then(resp => console.log(resp))
        .catch(error => {console.log(error)})
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default WithRestoService()(App);