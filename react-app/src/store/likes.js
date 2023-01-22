const CREATE_LIKE = 'likes/CREATE_LIKES'
const FETCH_MY_LIKES = 'likes/FETCH_LIKES'
const DELETE_LIKE = 'likes/DELETE_LIKES'
const FETCH_LIKED_BY = ''

const create_like = (ansObj) => ({
    type: CREATE_LIKE,
    payload: ansObj
})


const del_like = (ansObj) => ({
    type: DELETE_LIKE,
    payload: ansObj
})

const fetch_likes = (ansObj) => ({
    type: FETCH_MY_LIKES,
    payload: ansObj
})


export const fetchLikes = () => async (dispatch) => {
    const response = await fetch(`api/profile/likes`, {
        headers: {
            'Content-Type': 'application/json'
        }
        });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(fetch_likes(data))
    }
}


export const createLike = (id, myId) => async (dispatch) => {
    const response = await fetch(`api/discover/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: {
            liked_by_id: myId,
            user_id: id
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(create_like(data))
    }
}


export const deleteLikes = () => async (dispatch) => {
    const response = await fetch(`api/profile/likes`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(del_like(data))
    }
}


const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case CREATE_LIKE:
            let liked =  action.payload
            newState.mylikes[liked.id] = liked
            return newState
        case DELETE_LIKE:
            const likedD = action.payload
            delete newState.mylikes[likedD]
            return newState
        case FETCH_MY_LIKES:
            return {mylikes: action.payload}
        case FETCH_LIKED_BY:
            return {likedby: action.payload}
        default:
            return state;
    }
}
