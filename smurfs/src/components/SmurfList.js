import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';



const SmurfList = ({ fetchSmurfs, smurfs, isFetching, error}) => {

    useEffect(() => {
        fetchSmurfs()
    },[fetchSmurfs])

    return(
        <div>
           <div className='smurfs'>
               {isFetching && <h2>data is loading...</h2>}
               {smurfs.map(smurf => {
                   return <Smurf key={smurf.id} smurf={smurf}/>
               })}
           </div>
        </div>
    )

};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect 
(mapStateToProps,
{fetchSmurfs})
(SmurfList);