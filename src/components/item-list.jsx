import React from 'react';
import styled from 'styled-components';
import Item from './item';


const StyledTitle = styled.div`
    margin-left: 36px;
    font-size: 14pt;
    font-weight: 700;
    color: #707070;
`;

const TodoList = props => {
    const {todos = [], isComplete} = props;

    const data = () => {
        return todos.map(item => {
            if (isComplete ? item.isComplete : !item.isComplete) {
                return (
                    <Item {...props} key={item.id} id={item.id} body={item.body} />
                );
            };
        });
    };

    const inProgresCount = todos.filter(item => !item.isComplete).length;
    const completedCount = todos.filter(item => item.isComplete).length;

    return (
        <div>
            <StyledTitle>
                {isComplete ? `Complete ( ${completedCount} )` : `In progress ( ${inProgresCount} )`}
            </StyledTitle>
            {data()}
        </div>
    );
};

export default TodoList;
