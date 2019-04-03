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

        console.log(snapshot);
        room.key = snapshot.key;

      this.setState({ rooms: this.state.rooms.concat( room ) });

    });
  }

   render(){
    console.log(this.state.rooms);
    return(
      <section className="roomlist">
      <ul>
  {this.state.rooms.map( room =>
                <li>
                  { room.name }
                </li>
            )}

  </ul>

      </section>
    );
  }
}

export default RoomList;
