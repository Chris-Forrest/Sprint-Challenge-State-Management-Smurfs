import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';
import styled from 'styled-components';

const StyledForm = styled.form `
border: 1px solid rgb(210,210,210);
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color: white;

`

const initialSmurfInputs = {
    name: '',
    age: '',
    height:''
}


function SmurfForm(props){
    const[ smurfInputs, setSmurfInputs ] = useState(initialSmurfInputs)

    const changeSmurfInput = e => {
        setSmurfInputs({
            ...smurfInputs,
            [e.target.name]:e.target.value,
        })
    };

    const createSmurf = e => {
        e.preventDefault();
        const newSmurf = {
            name: smurfInputs.name,
            age: smurfInputs.age,
            height: smurfInputs.height,
            id: Date.now(),
        }
        console.log('newSmurf function in form',newSmurf)
        props.postSmurf(newSmurf)
        setSmurfInputs(initialSmurfInputs);
    }

    return(
        <StyledForm onSubmit={createSmurf}>
            <h2>Create Smurf</h2>

            <label>Name:</label>
            <input
            name='name'
            type='text'
            value={smurfInputs.name}
            onChange={changeSmurfInput}
            />

            <label>Age:</label>
            <input
            name='age'
            type='text'
            value={smurfInputs.age}
            onChange={changeSmurfInput}
            />

            <label>Height:</label>
            <input
            name='height'
            type='text'
            value={smurfInputs.height}
            onChange={changeSmurfInput}
            />

            <button>Create Smurf!</button>

        </StyledForm>
    )


};

const mapStateToProps = state => {
    return {
        smurf:state.smurfs
    }
}

export default connect(
    mapStateToProps,
    {postSmurf}
)(SmurfForm);