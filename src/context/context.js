import React, { Component } from 'react'

const ProductContext = React.createContext();

//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0
    }
    //handlesidebar
    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }
    //handlesidcarrts
    handleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen })
    }

    //close cart
    closeCart = () => {
        this.setState({ cartOpen: false })
    }
    //close cart
    openCart = () => {
        this.setState({ openCart: true })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                openCart: this.openCart,
                closeCart: this.closeCart,

            }}>
                {this.props.children}
            </ProductContext.Provider >
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }