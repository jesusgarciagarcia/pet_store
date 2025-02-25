const base = "https://petstore3.swagger.io";

function searchPets() {
    return fetch(`${base}/api/v3/pet/findByStatus?status=available`)
        .then(response => response.json());
}

function removePet(id) {
    return fetch(`${base}/api/v3/pet/${id}`, {
        method: 'DELETE'
    });
}