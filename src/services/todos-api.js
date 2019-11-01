const BASE_URL = 'http://manliestben.zapto.org:3001/api/todos';

export function getAll() {
    return fetch('http://manliestben.zapto.org:3001/api/todos')
    .then(res => res.json());
}

export function create(todo) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(todo)
    }).then(res => res.json());
}

export function update(todo) {
    return fetch(`${BASE_URL}/${todo._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(todo)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}