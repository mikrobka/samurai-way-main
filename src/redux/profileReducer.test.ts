import {addPost, deletePost, PostsType, profileReducer, ProfileType} from "./profileReducer";

let initialState =   [
    {id: 1, postMessage: "Yo", likesCount: 10},
    {id: 2, postMessage: "Hi how are you", likesCount: 10},
    {id: 3, postMessage: "This is my firs post", likesCount: 10},
    {id: 4, postMessage: "Yo", likesCount: 10},
] as Array<PostsType>

it('new post should be added' , () => {
    let action = addPost('new post')
    let state = {
        postsData:[
            {id: 1, postMessage: "Yo", likesCount: 10},
            {id: 2, postMessage: "Hi how are you", likesCount: 10},
            {id: 3, postMessage: "This is my firs post", likesCount: 10},
            {id: 4, postMessage: "Yo", likesCount: 10},
        ],
        profile:{} as ProfileType,
        status:""
    }
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toEqual(5)
})

it('post should be deleted' , () => {
    let action = deletePost(1)
    let state = {
        postsData:[
            {id: 1, postMessage: "Yo", likesCount: 10},
            {id: 2, postMessage: "Hi how are you", likesCount: 10},
            {id: 3, postMessage: "This is my firs post", likesCount: 10},
            {id: 4, postMessage: "Yo", likesCount: 10},
        ],
        profile:{} as ProfileType,
        status:""
    }
    let newState = profileReducer(state, action)

    expect(newState.postsData[0].id).toBe(2)
})

