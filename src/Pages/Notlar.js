
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React from 'react';
//Calling Bootstrap 4.5 css
import database, { db } from '../firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import { onValue } from "firebase/database";
//Calling Firebase config setting to call the data

class App extends React.Component {
constructor(props) {
    
    super(props);
   
    this.state = {justusr : []}
    }
    
  componentDidMount() {
   
    
     
    onValue(db , snapshot => {
        let justusr = [];
        snapshot.forEach(snap => {
            
          justusr.push(snap.val());
        });
        this.setState({ justusr: justusr });
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
                   
                    
                </tr>
            </thead>
            <tbody>
            {this.state.justusr.map(data => {
                
                return (
                    <tr>     
                    <td>{data.Ad}</td>
                    <td>{data.Soyad}</td>
                    
                    
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