import React from 'react'

const OrderContext = React.createContext({
    itemsList: [],
    onToggleOrder: () => {},
})

export default OrderContext