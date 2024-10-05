

//const App=()=><Menu />

//export default App

import { Component } from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Menu from './components/MainPage'
import MyOrders from './components/Order';

import OrderContext from './Context/OrderContext';



class App extends Component {
  state = {itemsList: []}

  onToggleitem = itemDetails => {
    const {itemsList} = this.state
    const isAlreadyExist = itemsList.some(
      eachItem => eachItem.id === itemDetails.id,
    )

    if (isAlreadyExist === true) {
      this.setState(prevState => ({
        BookMarkList: prevState.itemsList.filter(
          eachBook => eachBook.id !== itemDetails.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        itemsList: [...prevState.itemsList, itemDetails],
      }))
    }
  }

  render() {
    const {itemsList} = this.state

    return (
      <OrderContext.Provider
        value={{
          itemsList,
          onToggleOrder: this.onToggleitem,
        }}
      >
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Menu}/>
          <Route exact path="/orders" component={MyOrders} />
          
        </Switch>
        </BrowserRouter>
      </OrderContext.Provider>
    )
  }
}

export default App
