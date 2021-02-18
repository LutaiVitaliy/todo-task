import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../icons/delete.svg'


const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 16px;
    margin: 12px 0px;
    heigth: 24px;
`;

const StyledLabel = styled.label`
    text-decoration: ${props => props.isComplete ? "line-through" : "none"};
    color: #707070;
    width: 80%;
    font-size: 14pt;
    height: 27px;
    line-height: 27px;
`;

const StyledButton = styled.button`
    border: none;
    heigth: 24px;
    padding: 0px;
    background-color: white;
    &:focus {
        outline: none;
    };
`;

const StyledCheckbox = styled.input`
    &:before {
        border: 2px solid;
        background-color: white;
        border-color: transparent;
        box-sizing: border-box;
        color: #DEA0A1;
        content: close-quote;
        display: inline-block;
        height: 22px;
        width: 22px;
        outline: 2px solid #DEA0A1;
    };
    &:checked:before {
        background-color: #DEA0A1;
        border-color: white;
    };
`;

const Item = props => {
    const {
        id,
        body,
        isComplete,
        updateTodoAction,
        deleteTodoAction
    } = props;

    const handleToggle = () => {
        if (!isComplete) {
            updateTodoAction(id, body);
        };
    };

    const handleDelete = () => {
        deleteTodoAction(id);
    };

    return (
        <StyledContainer>
            <StyledCheckbox type="checkbox" onChange={handleToggle} checked={isComplete}/>
            <StyledLabel isComplete={isComplete}>{props.body}</StyledLabel>
            <StyledButton onClick={handleDelete}>
                <img src={deleteIcon}/>
            </StyledButton>
        </StyledContainer>
    )
};

export default Item;
