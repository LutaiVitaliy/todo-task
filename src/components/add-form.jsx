import React, {useState} from 'react';
import styled from 'styled-components';


const StyledForm = styled.form`
    padding: 16px;
`;

const StyledInput = styled.input`
    width: 466px;
    height: 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px #ccc;
    border: none;
    margin-right: 16px;
    padding-left: 22px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 12pt;
    color: #707070;
    &::placeholder {
        color: #DFDFDF
    };
    &:focus {
        outline: none;
    };
`;

const StyledButton = styled.button`
    height: 30px;
    width: 60px;
    background-color: #DEA0A1;
    border: none;
    box-shadow: 1px 1px 2px 2px #ccc;
    border-radius: 10px;
    color: white;
    font-size: 12pt;
    font-family: 'Roboto';
    &:focus {
        outline: none;
    };
    &:active {
        background-color: #e08175;
    }
`;

const AddForm = props => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim()) {
            props.addTodoAction(value);
            setValue('');
        };
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput value={value} onChange={handleChange} placeholder="Add new todo..."/>
            <StyledButton onClick={handleSubmit}>Add</StyledButton>
        </StyledForm>
    )
};

export default AddForm;
