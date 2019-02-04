const initState = {
    blogs: [
        {id:'1', title:'help me find oranges', content:'blah blah blah'},
        {id:'2', title:'help me find apples', content:'blah blah blah'},
        {id:'3', title:'help me find grapes', content:'blah blah blah'}
    ]
}

const blogReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_BLOG':
            console.log('blog created', action.blog);
            return state;
        case 'CREATE_BLOG_ERROR': 
            console.log('create blog error', action.err);
            return state;
        default:
            return state;
    }
    
}

export default blogReducer