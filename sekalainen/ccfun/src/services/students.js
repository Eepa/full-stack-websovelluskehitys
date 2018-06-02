import axios from 'axios'

const baseUrl = 'https://f6qhhgk18i.execute-api.eu-west-1.amazonaws.com/production';

const getAllStudents = () => {
    const request = axios.get(`${baseUrl}/get/all`);

    return request.then(response => {
        console.log(response);
        return response.data;
    });
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

export default {getAllStudents, create, deletePerson, update};
