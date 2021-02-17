import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const { onReset, counters, onIncrement, onDelete, onDecrement } = this.props;
        return ( 
            <div>
                <button onClick={ onReset } className="btn btn-primary m-2">Reset</button>
                { counters.map( counter => (
                    <Counter onDecrement={onDecrement} onIncrement={onIncrement} onDelete={onDelete} key={counter.id} counter={counter} />
                )) }
            </div> );
    }
}
 
export default Counters;