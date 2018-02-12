import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons';

const getAll = () => {
    const request = axios.get(baseUrl);

    return request.then(response => response.data);
};

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson);
    return request.then(response => response.data);
};

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
};

const update = (updatedPerson) => {
    const request = axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson);
    return request.then(response => response.data);
};

export default {getAll, create, deletePerson, update};
