import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import AddForm from './add-form';
import {getTodosAction, addTodoAction, updateTodoAction, deleteTodoAction} from '../actions/actions';
import TodoList from './item-list';


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 600px;
    margin-left: 50px;
    margin-top: 50px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px 3px #ccc;
    font-family: 'Roboto';
`;

const StyledTitle = styled.div`
    margin-left: 36px;
    margin-top: 16px;
    color: #707070;
    font-size: 24pt;
    font-weight: bold;
`;

const ScrollContainer = styled.div`
    overflow: scroll;
`;

const Container = props => {
    useEffect(() => {
        props.getTodosAction();
    }, []);

    return (
        <StyledContainer>
            <StyledTitle>ToDo List</StyledTitle>
            <AddForm {...props}/>
            <ScrollContainer>
                <TodoList isComplete={false} {...props}/>
                <TodoList isComplete={true} {...props}/>
            </ScrollContainer>
        </StyledContainer>
    );
};

export default connect(
    state => ({
        todos: state.todos.todos
    }),
    {
        getTodosAction,
        addTodoAction,
        updateTodoAction,
        deleteTodoAction
    }
)(Container);
