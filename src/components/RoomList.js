import React ,{ Component } from 'react';
import MessageList from './MessageList';
import './RoomList.css';

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
    e.preventDefault();
   this.setState({newRoomName: e.target.value})
 }

  createRoom(e){
   e.preventDefault();
    if (!this.state.newRoomName) { return }
   this.roomsRef.push({
   name: this.state.newRoomName
   });
    this.setState({newRoomName:' '});
   }



   render(){
    return(
      <section className="roomlist">
        <ul>
          {this.state.rooms.map( (room,key) =>
            <li key={room.key}  onClick={() => this.props.setRoom(room)}>    {/*If you do not pass the key, then a warning: Each element in a child should have a unique "key" is displayed*/}
            {/*Anything you put between <li> and </li> will be shown on the screen and not executed as code. Since key= is JS code, you want that to go inside of the <li> tag itself. */}
            { room.name }
          </li>
          )}
        </ul>
        <input type="text" value={ this.state.newRoomName||' '} onChange={this.handleChange.bind(this)} />
        <input onClick={ (e) => this.createRoom(e) } type="button" name="submit" value="New Room"/>
      {/*  <input onClick={this.state.rooms.map(room,key)=><li key={room.key}{this.props.setRoom(room)} </li>} type="button" name="click" value="MakeActive"/>*/}

      </section>


    );
  }
}

export default RoomList;
