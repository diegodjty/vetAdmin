import React,{Component} from 'react';
import './bootstrap.min.css'

import Header from './components/Header'
import NewAppoitment from './components/NewAppoitment';
import AppoitmentsList from './components/AppoitmentsList';



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

  deleteAppoitment = id =>{
    const currentappoitments = [...this.state.appoitments]
    const appoitments = currentappoitments.filter(appoitment => appoitment.id !== id)
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
            <div className="col-md-10 mx-auto">
              <NewAppoitment
                createNewAppoitment = {this.createNewAppoitment}
              />
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <AppoitmentsList
                appointments={this.state.appoitments}
                deleteAppoitment={this.deleteAppoitment}
              />
            </div>
              
          </div>
      </div>
    );
  }
}
