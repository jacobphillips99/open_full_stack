import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
   return axios
        .get(baseURL)
        .then(response => response.data)
}

const create = (newObject) => {
    return axios
        .post(baseURL, newObject)
        .then(response => response.data)
}

const update = (id, newObject) => {
    return axios
        .put(`${baseURL}/${id}`, newObject)
        .then(response => response.data)
}

const deleteID = (id) => {
    return axios
        .delete(baseURL + '/' + id)
        // .then(response => response.data)
}

const services = { getAll, create, update, deleteID }

export default services