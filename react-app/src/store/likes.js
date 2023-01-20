const CREATE_LIKE = 'likes/CREATE_LIKES'
const FETCH_LIKES = 'likes/FETCH_LIKES'
const DELETE_LIKE = 'likes/DELETE_LIKES'

const create_like = (ansObj) => ({
    type: CREATE_LIKE,
    payload: ansObj
})


const del_like = (ansObj) => ({
    type: DELETE_LIKE,
    payload: ansObj
})


const fetch_likes = (ansObj) => ({
    type: FETCH_LIKES,
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


export const createLike = () => async (dispatch) => {
    const response = await fetch(`api/profile/likes`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
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
            const liked = action.payload
            newState[liked.id] = liked
            return newState
        case DELETE_LIKE:
            const del_liked = action.payload
            delete newState[del_liked.id]
            return newState
        case FETCH_LIKES:
            const likedPeople = action.payload
            for (let liked of likedPeople){
                newState[liked.id] = liked
            }
            return newState
        default:
            return state;
    }
}
