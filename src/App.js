import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import './App.css';
import * as firebase from 'firebase';
var config = {
   apiKey: "AIzaSyCKUlYwbvN-Jb9tspSr2fKeWgeXexPehSs",
   authDomain: "bloc-chat-feea2.firebaseapp.com",
   databaseURL: "https://bloc-chat-feea2.firebaseio.com",
   projectId: "bloc-chat-feea2",
   storageBucket: "bloc-chat-feea2.appspot.com",
   messagingSenderId: "395341828691"
 };
 firebase.initializeApp(config);


class App extends Component {
  constructor(props){
    super(props);
    this.state={activeRoom:{key: null}, displayName:null };{/*here we are setting the default value of key of activeRoom to null */}
  }

  setRoom(room){
   this.setState({activeRoom:room})
  }

  setUser(user){
    this.setState({user:user})
      }

  render() {
    const isActiveRoom=this.state.activeRoom;
    let showMessageListComponent;

    if(isActiveRoom){
      showMessageListComponent=<MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>;
    }
    return (
      <div className="App">
        <header>
         <h1>Bloc Chat</h1>
        </header>
        <main>
      </main>
     <RoomList firebase={firebase} setRoom={ (room) => this.setRoom(room)} activeRoom={this.state.activeRoom}/> {/*here we are rendering the RoomList component and passing the prop firebase to the RoomList component */}
    {/*<MessageList firebase={firebase} activeRoom={this.state.activeRoom}/> */}
    {/*  {showMessageListComponent} */}
     <User firebase={firebase} setUser={ (user) => this.setUser(user)} user={this.state.user}/>
     <MessageList firebase={firebase} user={this.state.user} activeRoom={this.state.activeRoom}/>
    </div>
    );
  }
}

export default App;
