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
    /* @ts-ignore */
    // const [products, setProducts] = useState(null)

    // const [initialState, setInitialState] = useState(null)
    // const [isLoading, setLoading: any] = useState(false)
   
    // useEffect(() => {
    //   setLoading(true);
    //   const response = await fetch("http://localhost:5289/api/Products");
    //   const data = await response.json();
    //       setProducts(data);
    //       setInitialState(data);
    //       setLoading(false);
    // }, []);
  
    // if (isLoading) return <p>Looking for products...</p>
    // if (!products) return <p>No products around here</p>
      
      render(): React.ReactNode {
        return (
          <div className="App">
            <header className="App-header">
              
            </header>
            <ul className="flex-container">
        {/* {products?.map((product) => { */}
          {/* // Return the element. Also pass key
          return (
            <li key={product.id} className="flex-item">
              {product.name} {" R$" + product.price}
              <br />
            </li>
          );
        })} */}
      </ul>
          </div>);
      }
    
    }
    export default Products;