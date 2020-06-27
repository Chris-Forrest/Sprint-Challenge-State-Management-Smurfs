import React from 'react';
import { connect } from 'react-redux';


const SmurfForm = () => {

    return(
        <form>
            <h2>Create Smurf</h2>

            <label>Name:</label>
            <input
            name='name'
            />

            <label>Age:</label>
            <input
            name='age'
            />

            <label>Height:</label>
            <input
            name='height'
            />

        </form>
    )


};

export default SmurfForm;