import React, { Component, JSXElementConstructor, ReactElement, ReactNode, useState } from 'react';

const HOC = (WrappedComponent: any, entity: any) =>{
  const [messages, setMessages] = useState< any>(null)
  interface useState {
    id: any
  };
    
  class HOCC extends Component<any>{
  
      
      render() {
        
     
  
        return (
          <React.Fragment>
            <WrappedComponent  />
            <div>
              <div>{messages}</div>
              <div>
              </div>
            </div>
          </React.Fragment>
        )
      
    }
  }}

  export default HOC;