import React ,{ Component } from 'react';

class RoomList extends Component{
  constructor(props) {
       super(props);
       this.state = { rooms: [] };
       this.roomsRef = this.props.firebase.database().ref('rooms');
}

   componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }
  handleChange(e) {
  this.setState({newRoomName: event.target.value})
  }

  createRoom(e){
   e.preventDefault();
   this.roomsRef.push({
   name: newRoomName
   });
   }
   
   render(){
    console.log(this.state.rooms);
    return(
      <section className="roomlist">
        <ul>
          {this.state.rooms.map( (room,key) =>
            <li key={room.key}>    {/*If you do not pass the key, then a warning: Each element in a child should have a unique "key" is displayed*/}
              { room.name }
            </li>
          )}
        </ul>
        <input type="text" value={ this.state.newRoomName} onChange={this.handleChange.bind(this)}/>
        <input onClick={ (e) => this.createRoom(e) } type="button" name="submit" value="Submit"/>
      </section>
    );
  }
}

export default RoomList;
