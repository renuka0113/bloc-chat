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
       this.setState({ messages: this.state.messages.concat( message ) });

 });
}

render() {
    return(
            {this.state.messages.filter( (message) => {message.roomId === this.props.activeRoom.key})
                                                  .map((message, key) => {
                                                        return (
                                                           <li key={message.key}>
                                                               {message.content}
                                                           </li>
                                                        )
                                            })

      return (
        <section className="messagelist">
            <ul>
                {messages}
            </ul>
        </section>
      )
    
    )

  }
}{/*component close */}

export default MessageList
