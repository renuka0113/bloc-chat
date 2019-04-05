import React ,{ Component } from 'react';

class RoomList extends Component{
  constructor(props) {
       super(props);
       this.state = { rooms: [], newRoomName:null };
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
   this.setState({newRoomName: e.target.value})
   {/*in the above statement, instead of e.target.value, if you write event.target.value, you will see:unexpected use of event, no restricted globals error  */}
  }
  {/*in the above statement, we are setting the state of newRoomName to e.target.value.  */}
  {/*see how we are defining the initial state of newRoomName as null, if this initial state is not set, then newRoomName undefined error occurs */}
  {/*e.target.value is the value that is there in the textbox which is in the render method below */}
  {/*this handleChange method is called whenever anything changes in the textbox, see in the render method below. */}


  createRoom(e){
   e.preventDefault();
   this.roomsRef.push({
   name: this.state.newRoomName
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
