import React, { Component } from 'react';
import RoomList from './components/RoomList';
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
  render() {
    return (
      <div className="App">
        <header>
         <h1>Bloc Chat</h1>
        </header>
        <main>
        </main>
     <RoomList firebase={RoomList.firebase}/>
      </div>
    );
  }
}

export default App;
