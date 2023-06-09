const API_QUESTIONS = '/api/questions';

export async function addQuestion(value) {
    const response = await fetch(`${API_QUESTIONS}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value),
    });
    console.log(response);
    return response.json();
}

export async function getQuestion() {
    const response = await fetch(`${API_QUESTIONS}?role=admin`)
    console.log(response.json);
    return response.json();
}

export async function deleteQuestion(question) {
    const response = await fetch (`${API_QUESTIONS}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(question)
    })
    return response.json()
}

export async function editQuestion(question) {
    const response = await fetch(`${API_QUESTIONS}/editQuestion`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(question)
    })
    return response.json()
}