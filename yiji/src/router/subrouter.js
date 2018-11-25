import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/home'
import Shop from '../containers/shop'
import Mine from '../containers/mine'
import Life from '../containers/lifeservice'
import Notfound from '../containers/notfound'
import City from '../containers/city'
import Detail from '../containers/detail'
import Login from '../containers/login'
import ShoppingCar from '../containers/shoppingcar'
import SearchContainer from '../containers/search'
import LifeMoney from '../containers/lifemoney'
import Give from '../containers/give'
import Warter from '../containers/jiaofeipage/warter'
import Dian from '../containers/jiaofeipage/dian'
import Wang from '../containers/jiaofeipage/wang'

export default class AppRouter extends Component {
  render(){
    return(
      <Switch>
          <Route path='/home' component={ Home }></Route>
          <Route path='/mine' component={ Mine }></Route>
          <Route path='/life' component={ Life }></Route>
          <Route path='/shop' component={ Shop }></Route>
          <Route path='/city' component={ City }></Route>
          <Route path='/search' component={ SearchContainer }></Route>
          <Route path='/detail/:id' component={ Detail }></Route>
          <Route path='/login/:router?' component={ Login }></Route>
          <Route path='/car' component={ ShoppingCar }></Route>
          <Route path='/money' component={ LifeMoney }></Route>
          <Route path='/give' component={ Give }></Route>
          <Route path='/warter' component={ Warter }></Route>
          <Route path='/dian' component={ Dian }></Route>
          <Route path='/wang' component={ Wang }></Route>
          <Route component={ Notfound }></Route>
      </Switch>
    )
  }
}
