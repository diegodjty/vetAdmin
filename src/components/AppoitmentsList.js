import React from 'react';
import Appoitment from './Appoitment';

const AppoitmentsList = ({appointments,deleteAppoitment}) => {

    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="car-title text-center"> Manage The appoitment </h2>
                    <div className="appoitments-list">
                        {appointments.map( appointment => (
                            <Appoitment
                                key={appointment.id}         
                                appointment={appointment}
                                deleteAppoitment={deleteAppoitment}
                            />
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default AppoitmentsList;