import React, { Component, useEffect, useReducer, useState } from "react";
import { render } from "react-dom";

type MyProps = {
    // using `interface` is also ok
    message: any;
  };
  type MyState = {
    count: any; // like this
  };
  interface useState {
    connected: any
  };

class Products  extends Component  {
    constructor(props: any){
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }
    /* @ts-ignore */
    // const [products, setProducts] = useState(null)

    // const [initialState, setInitialState] = useState(null)
    // const [isLoading, setLoading: any] = useState(false)
   
    async componentDidMount() {
    //   setLoading(true);
      const response = await fetch("http://localhost:5289/api/Products");
      const data = await response.json();
      this.setState({products: data, loading: false});
    }
//   
    // if (isLoading) return <p>Looking for products...</p>
    // if (!products) return <p>No products around here</p>
      
      render(): React.ReactNode {
        var state: any = this.state;
        return (
          <div className="App">
            <header className="App-header">
              
            </header>
            <ul className="flex-container">
        {state.products.map((product: any) => { 
           // Return the element. Also pass key
          return (
            <li key={product.id} className="flex-item">
              {product.name} {" R$" + product.price}
              <br />
            </li>
          );
        })}
      </ul>
          </div>);
      }
    
    }
    export default Products;