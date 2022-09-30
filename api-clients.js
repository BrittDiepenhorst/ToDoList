const baseURL = "http://localhost:3000/";

// GET request
async function getTodos() {
    try {
        const response = await fetch(baseURL, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
            },
        })
        if (response.ok) {
            console.log(response);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
};

// POST request
async function postTodo(todo) {
    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(todo),
        })
        if (response.ok) {
            console.log(response);
            return response.json();
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
};

// DELETE request
async function deleteTodo(id) {
    try {
        await fetch(baseURL + id, {
            method: "DELETE",
        })
    } catch (error) {
        console.log("Error: ", error);
    }
};

// // PUT update request
// async function putTodo(change, id) {
//     try {
//         await fetch(baseURL + id, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": 'application/json',
//             },
//             body: JSON.stringify(change),
//         })
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// };