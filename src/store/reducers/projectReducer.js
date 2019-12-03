const initState = {
    projects: [
        {id: '1', title: 'My First Article', content: 'Hello Im Abhishek Bisht'},
        {id: '2', title: 'My Second Article', content: 'Wassup people, how you doin'},
        {id: '3', title: 'My Third Article', content: 'blah blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
    
        default : 
            return state
    }
}

export default projectReducer;