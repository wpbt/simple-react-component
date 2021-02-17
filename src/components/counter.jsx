import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
        
        const {onIncrement, onDelete, counter, onDecrement} = this.props;
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={()=>onIncrement(counter)} className="btn btn-secondary btn-sm m-2">+</button>
                    <button onClick={()=>onDecrement(counter)} className="btn btn-secondary btn-sm" disabled={counter.value === 0 || counter.value < 0 ? 'disabled' : ''}>-</button>
                    <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                </div>
            </div> 
        );
    }
    
    formatCount(){
        const { value } = this.props.counter;
        return value === 0 || value < 0 ? 'Zero': value;
    }
    getBadgeClass(){
        const {value } = this.props.counter;
        let classes = 'badge m-2 badge-';
        classes += value === 0 || value < 0 ? 'warning': 'primary';
        return classes;
    }
    
}
 
export default Counter;