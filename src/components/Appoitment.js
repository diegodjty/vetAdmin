import React from 'react';

const Appoitment = ({appointment,deleteAppoitment}) => {
    
    return (
        <div className='media mt-3'>
            <div className="media-body">
                <h3 className='mt-0'>{appointment.petName}</h3>
                <p className="card-text"><span>Owner Name: </span> {appointment.ownerName}</p>
                <p className="card-text"><span>Date : </span> {appointment.date}</p>
                <p className="card-text"><span> Time : </span> {appointment.time}</p>
                <p className="card-text"><span> Symptoms: </span></p>
                <p className='card-text'>{appointment.symtoms}</p>
                <button 
                    className='btn btn-danger text-center'
                    onClick={()=> deleteAppoitment(appointment.id)}
                >Delete</button>
            </div>
        </div>
    );
};

export default Appoitment;