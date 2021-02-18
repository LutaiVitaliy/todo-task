import axios from 'axios';

export const getTodos = async () => {
    const url = '/api/tasks';

    const response = await axios.get(url);

    return response.data;
};

export const addTodo = async data => {
    const url = '/api/tasks';

    const body = {
        "body": data
    };

    const response = await axios.post(url, body);

    return response.data;
};

export const updateTodo = async (id, data) => {
    const url = '/api/tasks';

    const body = {
        "id": id,
        "body": data,
        "isComplete": true
    };

    const response = await axios.put(url, body);

    return response.data;
};

export const deleteTodo = async id => {
    const url = `/api/tasks/${id}`;

    const response = await axios.delete(url);

    return response.data;
};
