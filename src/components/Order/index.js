import OrderContext from "../../Context/OrderContext"

import ItemDetail from "../ItemDetails"

import './index.css'

const MyOrders = () => {
    
    return (
      <div>
        
        <OrderContext.Consumer>
          {value => {
            const {itemsList} = value
            return (
              <div >
                <h1>My Orders</h1>
                {itemsList.length === 0 ? (
                  <div className="book-cont">
                  <p>No Orders found</p>
                  </div>
                ) : (
                  <div>
                    <ul>
                    {itemsList.map(eachItem => (
                      <ItemDetail jobDetails={eachItem} key={eachItem.id} />
                    ))}
                  </ul>
                  
                  </div>
                  
                )}
              </div>
            )
          }}
        </OrderContext.Consumer>
        
      </div>
    )
  }
  
  export default MyOrders