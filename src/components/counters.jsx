import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const { onReset, counters, onIncrement, onDelete, onDecrement } = this.props;
        return ( 
            <div>
                { counters.map( counter => (
                    <Counter onDecrement={onDecrement} onIncrement={onIncrement} onDelete={onDelete} key={counter.id} counter={counter} />
                    )) }
                <button onClick={ onReset } className="reset-btn btn btn-primary m-2">Reset</button>
            </div> );
    }
}
 
export default Counters;