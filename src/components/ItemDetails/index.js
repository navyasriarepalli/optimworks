import './index.css'
import OrderContext from '../../Context/OrderContext';
const ItemDetail=props=>{
    const{itemDetails}=props 
    const{name,imageUrl,subCategory,price,availableQuantity,type}=itemDetails 

    
    return(


        <OrderContext.Consumer>
            {value => {
                const {onToggleBookmark} = value
                //const isChecked = BookMarkList.find(eachItem => eachItem.id === id)

                const onClickOrder = () => {
                    onToggleBookmark(itemDetails)
                    
                }
            
                return(
                    <li className='list-cont'>
            <div>
            <div>
                <img src={imageUrl} alt ={subCategory} className='imageing'/>
            </div>
            <div>
                <div className='mini'>
                <p>{name}</p>
                <p>Price : {price} /-</p>

                </div>
                <div className='mini'>
                <p>Quantity:{availableQuantity}</p>
                <p>{type}</p>

                </div>
                
                
            </div>
            <button type="button" onClick={onClickOrder} className='btn'>  place an order</button>

            </div>
            
        </li>
                )
            }}
        </OrderContext.Consumer>
        
    )

}
export default ItemDetail