import {Component} from 'react'
import './index.css' 
import ItemDetail from '../ItemDetails'
import Header from '../Header'


class Menu extends Component{
    state={items:[]}

    componentDidMount(){
        this.getAllProducts()
        
    }

    onSubmitSuccess=data=>{
        const updatedDataList=data.record.map(each=>({
            id:each.id,
            name:each.name,
            category:each.category,
            subCategory:each.sub_category,
            availableQuantity:each.available_quantity,
            price:each.price,
            imageUrl:each.image_url,
            type:each.type

        }))
        this.setState({items:updatedDataList})
        console.log(updatedDataList)

    }

    getAllProducts=async ()=>{
        const apiUrl="https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968"
        const options={
            method:"GET"
        }
        const response=await fetch(apiUrl,options)
        const data= await response.json()

        if(response.ok===true){
            this.onSubmitSuccess(data)
            


        }
        else{
            console.log("erroe")

        }

    }

    renderItemsList=()=>{
        const {items}=this.state 
        return (
            <ul className='ul-cont'>
                {items.map(eachItem => {
                
                if(eachItem.id===undefined){
                    return ""

                }
                else{
                    return <ItemDetail itemDetails={eachItem} key={eachItem.id} />

                }
              
            })}
            </ul>
        )
    }
    
    render(){
        return(
            <div className='main-cont'>
                <Header/>
                <div>{this.renderItemsList()}</div>
                
            </div>
        )
    }
}

export default Menu