import React ,{ Component } from 'react';

class User extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
 });

  }



signInWithPopup(e){
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );
}

signOut(e){
  this.props.firebase.auth().signOut();
}

render(){
  return(
    <section className="user">
      <input onClick={ (e) => this.signInWithPopup(e) } type="button" name="sign-in" value="Sign-in"/>
      <input onClick={ (e) => this.signOut(e) } type="button" name="sign-out" value="Sign-Out"/>
      {this.props.user? this.props.user.displayName : "Guest"}
    </section>
    );
}
}
export default User;
