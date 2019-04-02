import React ,{ Component } from 'react';

class RoomList extends Component{
  constructor(props) {
       super(props);
       this.state = { rooms: [] };
     };
     this.roomsRef = this.props.firebase.database().ref('rooms');
   }

render(){
    return(
      <section className="roomlist">
      RoomLists will go here
      {this.props.firebase}
      </section>
    );
  }
}

export default RoomList;
