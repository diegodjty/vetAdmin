import React, { Component } from 'react'

export default class NewAppoitment extends Component {


    state = {

        appoitment: {
            petName: '',
            ownerName: '',
            date: '',
            time: '',
            symtoms: ''

        }
    }

    handleChange = e => {
        this.setState({
            ...this.state.appoitment,
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Fill the form to create a new appoitment
                    </h2>

                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Pet Name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet Name"
                                    name="petName"
                                    onChange={this.handleChange}
                                    value={this.state.appoitment.petName}
                                />
                            </div>
                        </div> {/*form-group*/}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Owner Name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Owner Name"
                                    name="ownerName"
                                    onChange={this.handleChange}
                                    value={this.state.appoitment.ownerName}
                                />
                            </div>
                        </div> {/*form-group*/}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Date
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    onChange={this.handleChange}
                                    value={this.state.appoitment.date}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Time
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="time"
                                    onChange={this.handleChange}
                                    value={this.state.appoitment.time}
                                />
                            </div>
                        </div> {/*form-group*/}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Symthoms
                            </label>
                            <div className="col-sm-8 col-lg-10">
                               <textarea 
                                    className="form-control"
                                    name="symtoms"
                                    placeholder="State the symtoms"
                                    onChange={this.handleChange}
                                    value={this.state.appoitment.symtoms}
                                >
                               </textarea>
                            </div>
                        </div> {/*form-group*/}
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Add new Appoitment"/>
                    </form>

                </div>
            </div>
        )
    }
}
