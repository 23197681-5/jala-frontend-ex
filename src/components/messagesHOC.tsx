import React, { JSXElementConstructor, ReactElement, ReactNode, useState } from 'react';

const HOC = (WrappedComponent: any, entity: any) =>{
   const [messages, setMessages] = useState< any>(null)
  interface useState {
    id: any
  };
    
    // const Message = () =>{}
  
    const addMessage = (payload: any, type: any) => {
        setMessages({
          messages: [
            {
              payload,
              type,
            //   id: _.now(),
            },
            ...messages,
          ],
        });
      }
      /* API to be exposed as props to the wrapped component */
      const alertMessage = {
        error: (message: any) => addMessage(message, "error"),
        success: (message: any) => addMessage(message, "success"),
        info: (message: any) => addMessage(message, "info"),
      }
  
  
      const clearMessages = () => {
        // this.setState({
        //   messages: [],
        // })
      }

      const isMultipleMessagesPresent = () => messages.length > 1
      const removeMessage = (messageId: number) => {
        // const updatedMessages: any = messages.filter(
        //   messages,
        //     (          message: { id: any; }) => message.id !== messageId
        // );
  
        setMessages({
          messages: updatedMessages,
        })
      }
    const updatedMessages = messages;
      
      render() {
        const alertDialogs: ReactNode = [{}].map(
          messages,
          ({payload, type, id }:{id: any, type: any, payload: any}): any => {
            return (
                <div></div>
            //   <AlertDialog
            //     key={id}
            //     message={payload}
            //     type={type}
            //     handleOnClose={() => this.removeMessage(id)}
            //   />
            );
          }
        )
  
        return (
          <React.Fragment>
            <WrappedComponent  />
  {/* alertMessage={this.alertMessage} */}
            <div>
              <div>{alertDialogs}</div>
              <div>
                {/* {this.isMultipleMessagesPresent() && ( 
                //   <ClearAlertDialog onClearClick={this.clearMessages} />
                // )}*/}
              </div>
            </div>
          </React.Fragment>
        )
      
    }
  }

  export default HOC;