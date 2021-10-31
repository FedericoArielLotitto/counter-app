import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { valor } ) => {
    // let value = "";
    return (
            <>
                <h1>Counter App</h1>
                <h2>{ valor }</h2>
            </>
    )
};

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;