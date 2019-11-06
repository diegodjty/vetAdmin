import React,{Component} from 'react';
import './bootstrap.min.css'

import Header from './components/Header'
import NewAppoitment from './components/NewAppoitment';



export default class App extends Component {


  state={
    appoitments: []
  }

  createNewAppoitment = data =>{

    const appoitments = [...this.state.appoitments,data]

    this.setState({
      appoitments
    })
  }

  render(){
    return (
      <div className="container">
          <Header
            title = 'Veterinarian Patients Administrator'
          />
          <div className="row">
            <div className="col-md10 mx-auto">
              <NewAppoitment
                createNewAppoitment = {this.createNewAppoitment}
              />
            </div>
          </div>
      </div>
    );
  }
}
