import React from 'react';
import './App.css';
import StartFireBase from './firebase';
//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';
//Calling Firebase config setting to call the data
import firebase from './firebase';

const db=StartFireBase();

class App extends React.Component {
constructor(props) {
    
    super(props);
   
    this.state = {notes : []}
    }
    
  componentDidMount() {
   
   
     
      firebase.database().ref("notes").on("value", snapshot => {
        let notes = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            notes.push(snap.val());
        });
        this.setState({ notes: notes });
      });
    
    
 }
  
  render(){
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
          <h3>How to show firebase data in reactjs?</h3>
      </div>
    
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>FirstName</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    
                </tr>
            </thead>
            <tbody>
            {this.state.notes.map(data => {
                
                return (
                    <tr>     
                    <td>{data.Ad}</td>
                    <td>{data.Soyad}</td>
                    <td>{data.userID}</td>
                    
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}
export default App;