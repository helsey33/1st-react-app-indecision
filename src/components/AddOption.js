import React from 'react';

export default class AddOption extends React.Component {
   
    state={
        error:undefined
    }
    
     addOption= (e) => {
        e.preventDefault();
        const val = e.target.elements.addOp.value.trim();
        console.log('Hi');
        const error = this.props.addOption(val);
        e.target.elements.addOp.value = '';
        this.setState(() => ({ error }));
    };
    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.addOption}>
                    <input type="text" name="addOp" autoComplete="off" />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}