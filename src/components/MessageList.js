import React ,{ Component } from 'react';
import RoomList from './RoomList';

class MessageList extends Component{
  constructor(props) {
       super(props);
       this.state = { messages: []};
       this.messagesRef = this.props.firebase.database().ref('messages');
}
componentDidMount() {
       this.messagesRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;
      {/* console.log(message.roomId); */}
    if(message.roomId===this.state.activeRoom.key){
       this.setState({ messages: this.state.messages.concat( message ) });
 }
 });
}

render(){
 return(
   <section className="messagelist">

     <ul>
        {this.state.messages.map( (message,key) =>
          <li key={message.key}>
            { message.content}
          </li>
        )}
     </ul>
   </section>
 );
}
}


export default MessageList;
