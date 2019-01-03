import React, { Component } from 'react';

class Addtodo extends Component {
    state = {
        content: ''
    }

    handleChangeEvent = (e) => {
        this.setState( {
            content : e.target.value
        } );
        
    }

    handleSubmitEvent = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);

        this.setState({
            content: ''
        })

        // Instead of using the this.setState() and adding a value to the input tag,
        // one can easily clear the input field by just adding
        // e.target.reset();
    }

    render() {
        return(
            <div className="center">
                <form onSubmit={ this.handleSubmitEvent }>
                    <input type='text' placeholder='Add New Todo' onChange={ this.handleChangeEvent } value={this.state.content}/>
                    <button className='right'><i className="material-icons">add</i></button>
                </form>
            </div>
        )
    }
}

export default Addtodo;

// This component is a container component aka a class based component 
// because it needs to contain state