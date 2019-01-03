import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={ todo.id }>
                    <span>{ todo.content }</span>
                    <button className='right' onClick={ () => { deleteTodo(todo.id) }}>X</button>
                </div>
            )
        })
    ) : (
    <p className='center'>
        You have no Todos left!
    </p>
    )

    return(
        <div className='todos collection'>
            { todoList }
        </div>
    )
}

// 'Collection' is a materialize css class which enables you to group objects together


export default Todos;