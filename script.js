// Selectors
const todoForm = document.querySelector('form');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoValue = todoInput.value;

// AddEventlistener
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    postTodosAPI();
});

// Get Todos
const getTodosAPI = async () => {
    const todos = await getTodos();
    addTodosToDom(todos);
};
getTodosAPI();

// Post Todos
const postTodosAPI = async () => {
    //retrieve current inputfield value
    const newTodo = { description: todoInput.value, done: false };

    //use and await the post request function
    const newTodofromAPI = await postTodo(newTodo);

    const arrayTodos = [];
    arrayTodos.push(newTodofromAPI);

    // use the addTodosToDom() function to add the new todo to the DOM
    addTodosToDom(arrayTodos);
};

// Adding Todos to the DOM 
const addTodosToDom = (todos) => {
    todos.forEach(todo => {
        // Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // Completed BUTTON
        const completedButton = document.createElement('input');
        completedButton.setAttribute('type', 'checkbox')
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        // Complete todo on CLICK
        completedButton.addEventListener('click', async (e) => {
            const item = e.target;
            const checkTodo = item.parentElement;
            checkTodo.classList.toggle('completed');
            // checkTodo.classList.toggle('checked');

            // const doneOrNotdone = () => {
            //     if (checkbox.checked) {
            //         return { done: true };
            //     } else {
            //         return { done: false };
            //     }
            // };
            // const change = doneOrNotdone();
            // const id = todo._id;
            // console.log(id);
            // putTodo(change, id);
        });

        // Create LI voor newTodo
        const newToDoLi = document.createElement('li');
        newToDoLi.innerText = todo.description;
        newToDoLi.classList.add('todo-item');
        todoDiv.appendChild(newToDoLi);

        // Trash BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class = "fas fa-trash-alt"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        // Delete todo on CLICK
        trashButton.addEventListener('click', async (e) => {
            const item = e.target;
            if (item.classList[0] === 'trash-btn') {
                const DELtodo = item.parentElement;
                const id = todo._id;
                await deleteTodo(id);
                DELtodo.remove();
            }
        });

        // Append DIV to LIST
        todoList.appendChild(todoDiv);

        // CLEAR Todo Input value
        todoInput.value = "";
    });
};