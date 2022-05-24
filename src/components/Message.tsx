import react from 'react'
import HOC from './messagesHOC';


const test = (props: any): any => {
    let foundName = props.name;
    if(foundName){
        return(<p>{props.name}, {props.message}</p>);
    }
    return( <a>FUiwheuifhewuifhwu</a>  );
};


const Message = HOC(test, 'd');

export default Message;