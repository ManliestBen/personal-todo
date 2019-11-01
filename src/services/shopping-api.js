const BASE_URL = 'http://manliestben.zapto.org:3001/api/shopping';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(shopping) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(shopping)
    }).then(res => res.json());
}

export function update(shopping) {
    return fetch(`${BASE_URL}/${shopping._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(shopping)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}