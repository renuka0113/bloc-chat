import React ,{ Component } from 'react';

class MessageList extends Component{
  constructor(props) {
       super(props);
       this.roomsRef = this.props.firebase.database().ref('rooms');
}
