import React ,{ Component } from 'react';
import RoomList from './RoomList';

class MessageList extends Component{
  constructor(props) {
       super(props);
       this.state = { messages: [], newMessageName:null};
       this.messagesRef = this.props.firebase.database().ref('messages');
}
componentDidMount() {
       this.messagesRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;
       this.setState({ messages: this.state.messages.concat( message ) });

 });
}

handleMessage(e) {
  e.preventDefault();
 this.setState({newMessageName: e.target.value})
}

createMessage(e){

  this.messagesRef.push({
 name: this.state.newMessageName
 });
  this.setState({newMessageName:' '});
 }

render() {
    return(
      <section className="messagelist">
        <ul>

            {this.state.messages.filter( (message) => message.roomId === this.props.activeRoom.key)
                                .map(    (message, index) => <li key={index}>
                                                              {message.content}

                                                             </li>
                                         )
                                     }
            </ul>
           <input type="text" value={ this.state.newMessageName||' '} onChange={this.handleMessage.bind(this)}  />
            <input onClick={ (e) => this.createMessage(e) } type="button" name="send" value="Send"/>
        </section>

    );
  }
}

export default MessageList;
